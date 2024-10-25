import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const AfaziInfo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ display: 'flex', background: theme.background, color: theme.textColor, minHeight: '100vh', padding: '25px' }}>
      <div style={{ flex: 3, paddingRight: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>AFAZİ HAKKINDA BİLGİLER</h1>

        <div style={{ marginBottom: '20px' }}>
          <h2>Etiyolojisi</h2>
          <p>Etiyolojisi, afazinin oluşumuna yol açan faktörlerin incelendiği alandır. Bazı önemli etiyolojik faktörler şunlardır:</p>
          <ul>
            <li><strong>Beyin travmaları:</strong> Kafa travmaları afaziye neden olabilir. Beyin travmaları genellikle kafaya gelen darbeler sonucunda oluşur ve beyin dokusunda hasara neden olabilir.</li>
            <li><strong>İnme:</strong> İnme, beyin dokusunun hasar görmesine ve afaziye yol açabilir. İnme, beyin kan damarlarının tıkanması veya patlaması sonucunda meydana gelir ve beyin fonksiyonlarını etkileyebilir.</li>
            <li><strong>Nörolojik hastalıklar:</strong> Parkinson hastalığı gibi nörolojik bozukluklar, afazi riskini artırabilir. Nörolojik hastalıklar beyin ve sinir sistemi fonksiyonlarını etkileyebilir ve bazı durumlarda dil yeteneklerini de olumsuz yönde etkileyebilir.</li>
            <li><strong>Beyin tümörleri:</strong> Beyin tümörleri, dil bölgelerini etkileyerek afaziye neden olabilir. Beyin tümörleri genellikle beyin dokusunun anormal bir şekilde büyümesi sonucunda oluşur ve çevre dokulara baskı yaparak farklı semptomlara neden olabilir.</li>
            <li><strong>Kanser:</strong> Beyin kanseri, dil yeteneklerini etkileyebilir ve afaziye yol açabilir. Beyin kanseri, beyin dokusunda anormal hücre büyümesi sonucu oluşur ve çevredeki dokulara baskı yapabilir.</li>
            <li><strong>Enfeksiyonlar:</strong> Beyindeki enfeksiyonlar, dil yeteneklerini etkileyebilir ve afaziye yol açabilir. Enfeksiyonlar, beyin dokusunda inflamasyona neden olabilir ve bu da dil yeteneklerini etkileyebilir.</li>
            <li><strong>Yaşlılık:</strong> Yaşlılık, dil yeteneklerinde azalma ve afazi riskinin artmasıyla ilişkilendirilebilir. Yaşlılıkla birlikte beyin fonksiyonlarında ve sinir iletiminde yavaşlama meydana gelebilir.</li>
            <li><strong>Kalıtsal faktörler:</strong> Bazı durumlarda afazi, kalıtsal faktörlerden kaynaklanabilir. Aile geçmişinde afazi olan bireylerde, bu durumun genetik bir bileşeni olabilir.</li>
            <li><strong>İlaçlar:</strong> Bazı ilaçlar, beyin fonksiyonlarını etkileyerek afaziye neden olabilir. Özellikle uzun süreli kullanılan bazı ilaçlar beyin aktivitesini değiştirebilir ve dil yeteneklerini etkileyebilir.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Eşlik Eden Hastalıklar</h2>
          <p>Eşlik eden hastalıklar, afazi ile birlikte görülen diğer sağlık sorunlarıdır. Bunlar arasında şunlar bulunabilir:</p>
          <ul>
            <li><strong>Davranışsal ve duyusal bozukluklar:</strong> Anksiyete, depresyon gibi ruhsal bozukluklar afaziye eşlik edebilir.</li>
            <li><strong>Fiziksel engeller:</strong> Hareket kısıtlılığı veya yutma problemleri, afazi ile birlikte görülebilir.</li>
            <li><strong>Sinirsel Rahatsızlıklar:</strong> Sinirsel rahatsızlıklar da afaziye neden olabilir ve dil becerilerini etkileyebilir.</li>
            <li><strong>Kardiyovasküler Hastalıklar:</strong> Kalp ve damar hastalıkları, beyin fonksiyonlarını etkileyerek afaziye yol açabilir.</li>
            <li><strong>Enfeksiyonlar:</strong> Enfeksiyonlar, beyin dokusunda inflamasyona neden olarak afaziye yol açabilir.</li>
            <li><strong>Nörolojik Bozukluklar:</strong> Parkinson hastalığı gibi nörolojik bozukluklar, dil yeteneklerini etkileyerek afaziye neden olabilir.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Afazi Türleri</h2>
          <p>Afazi, farklı dil becerilerini etkileyen çeşitli tiplere ayrılabilir. Başlıca afazi türleri şunlardır:</p>
          <ul>
            <li><strong>Broca Afazisi:</strong> Konuşma üretiminde zorluklarla karakterizedir. Broca Afazisi olan bireyler, konuşma üretirken kelime bulma ve cümle kurma güçlüğü çekerler. Ayrıca, genellikle dil anlama yetenekleri korunmuştur.</li>
            <li><strong>Wernicke Afazisi:</strong> Anlama güçlüğü ile belirgindir. Wernicke Afazisi olan bireyler, konuşulanları anlamakta zorluk çekerler ve genellikle akıcı konuşma sorunu yaşarlar. Ancak, konuşma üretimleri dilbilgisi açısından doğrudur.</li>
            <li><strong>Anomia:</strong> Kelimeleri hatırlamada güçlük çekme durumudur. Anomia, kelime bulma güçlüğü olarak da bilinir. Anomia yaşayan bireyler, tanıdık nesneleri veya kavramları adlandırmakta zorluk çekerler, ancak genellikle dil anlama ve cümle kurma yetenekleri normaldir.</li>
            <li><strong>Global Afazi:</strong> Konuşma ve anlama yeteneklerinin büyük ölçüde kaybolduğu bir afazi türüdür. Global Afazi olan bireyler, sınırlı veya hiç konuşma üretemezler ve genellikle konuşulanları anlayamazlar.</li>
            <li><strong>İzole Afazi:</strong> Dilin belirli bir yönünün etkilendiği nadir bir afazi türüdür. İzole Afazi, konuşma, anlama, okuma veya yazma gibi dil becerilerinden sadece birinin kaybıyla karakterizedir.</li>
            <li><strong>Affektif Afazi:</strong> Konuşma sırasında duygusal tonun veya ifadenin kaybolduğu bir afazi türüdür. Affektif Afazi olan bireyler, konuşurken duygusal ifade veya tonu iletmekte zorluk çekebilirler.</li>
            <li><strong>Transkortikal Sensör Afazi:</strong> Dilin işlenmesinde ve anlamada sorun yaşanan bir afazi türüdür. Transkortikal Sensör Afazi, konuşma ve anlama yeteneklerini etkiler ancak bazı durumlarda tekrarlamayı sağlar.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Türlerin Ayırıcı Tanıları</h2>
          <p>Türlerin ayırıcı tanıları, farklı afazi tiplerini birbirinden ayırt etmeye yönelik klinik değerlendirmelerdir. Önemli ayırıcı tanılar şunlardır:</p>
          <ul>
            <li><strong>Konuşma ve dil rehabilitasyonu:</strong> Afazi tedavisinde önemli bir rol oynayan rehabilitasyon programları, bireylerin dil becerilerini yeniden kazanmalarına yardımcı olabilir. Bu programlar genellikle konuşma terapisi, dil egzersizleri ve iletişim stratejileri üzerine odaklanır.</li>
            <li><strong>Sosyal destek grupları:</strong> Afazi yaşayan bireyler için sosyal destek grupları, deneyimleri paylaşma, duygusal destek alma ve pratik iletişim becerilerini geliştirme fırsatı sunabilir.</li>
            <li><strong>Teknolojik yardımcı araçlar:</strong> İleri teknolojiye sahip cihazlar ve uygulamalar, afazi semptomlarını yönetmeye veya iletişim becerilerini geliştirmeye yardımcı olabilir. Örneğin, konuşma tanıma yazılımları veya iletişim kartları gibi araçlar kullanılabilir.</li>
            <li><strong>Psikolojik destek:</strong> Afazi, bireyin duygusal ve psikolojik sağlığını etkileyebilir. Psikologlar veya danışmanlar, bireyin duygusal iyilik halini desteklemek ve afazi ile başa çıkmalarına yardımcı olmak için terapi veya danışmanlık sunabilirler.</li>
            <li><strong>Uzun vadeli bakım planları:</strong> Afazi yaşayan bireyler için uzun vadeli bakım planları, ihtiyaç duyulan tıbbi ve rehabilitasyon hizmetlerini sağlamak için önemlidir. Bu planlar, bireyin uzun vadeli iyilik halini ve yaşam kalitesini desteklemeye odaklanır.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Doğru Bilinen Yanlışlar</h2>
          <p>Afazi hakkında yaygın yanlış inançlar vardır. Bunlardan bazıları şunlardır:</p>
          <ul>
            <li><strong>Afazi sadece konuşma yeteneğini etkiler:</strong> Afazi, sadece konuşma yeteneğini değil, aynı zamanda anlama, okuma, yazma ve dilin diğer yönlerini de etkileyebilir. Bireyin afazi semptomları, dilin farklı alanlarında değişiklikler gösterebilir.</li>
            <li><strong>Afazi, kişinin toplumsal ilişkilerini etkilemez:</strong> Afazi, bireyin iletişim becerilerini etkileyerek toplumsal ilişkilerini de etkileyebilir. Afazi yaşayan bireyler, iletişim zorlukları yaşayabilir ve bu da sosyal etkileşimlerini olumsuz yönde etkileyebilir.</li>
            <li><strong>Afazi her zaman beyin travmasından kaynaklanır:</strong> Afazi, beyin travması yanı sıra inme, beyin tümörleri veya nörolojik hastalıklar gibi çeşitli nedenlerden kaynaklanabilir. Her afazi vakası farklı bir nedenle ilişkilendirilebilir.</li>
            <li><strong>Afazi yaşayan bireylerin kendilerini ifade etme yetenekleri yoktur:</strong> Afazi yaşayan bireyler, farklı iletişim stratejileri ve destek araçları kullanarak kendilerini ifade etme yeteneklerini geliştirebilirler. Bu stratejiler ve araçlar, afazi semptomlarını yönetmeye ve iletişimi kolaylaştırmaya yardımcı olabilir.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Afazi Belirtileri</h2>
          <p>Afazinin belirtileri, dil becerilerindeki bozukluklarla ilişkilidir. Başlıca belirtiler şunlardır:</p>
          <ul>
            <li><strong>Konuşma akıcılığında azalma:</strong> Konuşma sırasında kesintiler, takılmalar veya akıcı olmayan bir konuşma akışı gözlemlenebilir.</li>
            <li><strong>Konuşma hızında değişiklikler:</strong> Konuşma hızı normalden daha yavaş veya daha hızlı olabilir.</li>
            <li><strong>Kelimeleri yanlış yerleştirme:</strong> Konuşma sırasında kelime yerleştirmede zorluklar yaşanabilir ve cümlelerin anlamı bozulabilir.</li>
            <li><strong>Konuşma tekrarları:</strong> Aynı kelimelerin veya ifadelerin tekrarlanması sıkça görülebilir.</li>
            <li><strong>Dil sınırlamaları:</strong> Dilin sınırlı kullanımı veya kelimelerin eksikliği gözlemlenebilir.</li>
            <li><strong>Anlam karmaşası:</strong> Konuşmaların anlamı karmaşık veya belirsiz olabilir.</li>
            <li><strong>Ses tonu değişiklikleri:</strong> Konuşma sırasında ses tonunda ani değişiklikler veya düzensizlikler olabilir.</li>
            <li><strong>Dilbilgisi bozuklukları:</strong> Dilbilgisi kurallarına uygun olmayan cümle yapıları veya anlatım bozuklukları görülebilir.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AfaziInfo;