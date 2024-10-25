import React, { useEffect } from 'react';

const TreatmentMap = () => {
    useEffect(() => {
        const initMap = () => {
            const mapDiv = document.getElementById('map');
            const options = {
                center: { lat: 41.0082, lng: 28.9784 }, // İstanbul'un merkez noktası
                zoom: 12, // Yakınlaştırma seviyesi
                mapTypeId: 'roadmap', // Harita tipi
            };
            const map = new window.google.maps.Map(mapDiv, options);

            // Places Service oluştur
            const service = new window.google.maps.places.PlacesService(map);

            // Arama isteği
            const request = {
                location: options.center,
                radius: '5000', // 5 km yarıçapında ara
                keyword: 'dil ve konuşma merkezi',
            };

            // Arama sonuçlarını işleme
            const callback = (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    const bounds = new window.google.maps.LatLngBounds();
                    results.forEach((place) => {
                        if (!place.geometry || !place.geometry.location) return;

                        const marker = new window.google.maps.Marker({
                            map,
                            title: place.name,
                            position: place.geometry.location,
                        });

                        const infowindow = new window.google.maps.InfoWindow({
                            content: `<div><strong>${place.name}</strong><br>${place.vicinity}</div>`
                        });

                        marker.addListener('click', () => {
                            infowindow.open(map, marker);
                        });

                        bounds.extend(place.geometry.location);
                    });
                    map.fitBounds(bounds);
                }
            };

            // Başlangıç araması yap
            service.nearbySearch(request, callback);

            // Arama kutusunu oluştur
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Yer arayın';
            input.style.cssText = 'width: 240px; padding: 8px; margin: 8px;';

            // Arama kutusunu haritaya ekle
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

            // Places arama kutusunu başlat
            const searchBox = new window.google.maps.places.SearchBox(input);

            // Arama kutusunda bir şey arandığında gerçekleşen olay
            searchBox.addListener('places_changed', () => {
                const places = searchBox.getPlaces();
                if (places.length === 0) {
                    return;
                }

                // Haritada mevcut olan işaretleri temizleyin
                const markers = [];
                markers.forEach(marker => marker.setMap(null));

                // Haritayı yeni arama sonuçları ile güncelleyin
                const bounds = new window.google.maps.LatLngBounds();
                places.forEach(place => {
                    if (!place.geometry || !place.geometry.location) return;

                    const marker = new window.google.maps.Marker({
                        map,
                        title: place.name,
                        position: place.geometry.location,
                    });

                    const infowindow = new window.google.maps.InfoWindow({
                        content: `<div><strong>${place.name}</strong><br>${place.vicinity}</div>`
                    });

                    marker.addListener('click', () => {
                        infowindow.open(map, marker);
                    });

                    markers.push(marker);

                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });

                map.fitBounds(bounds);
            });
        };

        // Google Haritalar API'sini yüklemek için script oluştur
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap; // initMap fonksiyonunu window nesnesine ata

        // Script'i sayfanın en altına ekle
        document.body.appendChild(script);

        // Script kaldırıldığında harita nesnesini kaldır
        return () => {
            document.body.removeChild(script);
            delete window.initMap; // window'dan initMap fonksiyonunu kaldır
        };
    }, []);

    return (
        <main>
            <div id="map" style={{ height: '800px', width: '100%' }}></div>
        </main>
    );
};

export default TreatmentMap;