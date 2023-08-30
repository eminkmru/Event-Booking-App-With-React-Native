const DATA = [
  {
    Tur: "KONSER",
    Id: 52591,
    Adi: "Akustik Gitar Akşamı: Sevgi Melodileri",
    EtkinlikBitisTarihi: "2023-10-18T22:00:00",
    KucukAfis:
      "https://im.haberturk.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    EtkinlikMerkezi: "Ses Sahne",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0246,
      Boylam: 29.0054,
    },
    KisaAciklama: "Duygusal anlar yaşatacak akustik gitar performansları.",
    BiletSatisLinki: "https://orneklink.com/bilet19",
    UcretsizMi: false,
    Resim:
      "https://im.haberturk.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    EtkinlikUrl: "akustik-gitar-aksami-sevgi-melodileri",
    EtkinlikBaslamaTarihi: "2023-10-18T20:30:00",
    Sanatci: "Eren Demir",
  },
  {
    Tur: "TİYATRO",
    Id: 52601,
    Adi: "Klasik Komedi: Bir Delinin Hatıra Defteri",
    EtkinlikBitisTarihi: "2023-10-20T21:30:00",
    KucukAfis:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    EtkinlikMerkezi: "Gülmece Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0299,
      Boylam: 29.0132,
    },
    KisaAciklama: "Klasikleşmiş komedi eseri, gülmekten kırılacaksınız!",
    BiletSatisLinki: "https://orneklink.com/bilet20",
    UcretsizMi: false,
    Resim:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    EtkinlikUrl: "klasik-komedi-bir-delinin-hatira-defteri",
    EtkinlikBaslamaTarihi: "2023-10-20T19:00:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 52612,
    Adi: "Ritim Akşamları: Latin Dans Partisi",
    EtkinlikBitisTarihi: "2023-10-25T00:00:00",
    KucukAfis:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    EtkinlikMerkezi: "Salsa Dans Stüdyosu",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0165,
      Boylam: 29.0021,
    },
    KisaAciklama: "Latin ritimleriyle dolu, dans dolu bir gece sizi bekliyor!",
    BiletSatisLinki: "https://orneklink.com/bilet21",
    UcretsizMi: false,
    Resim:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    EtkinlikUrl: "ritim-aksamlari-latin-dans-partisi",
    EtkinlikBaslamaTarihi: "2023-10-24T20:00:00",
    Sanatci: "Ritmo Latino Dans Grubu",
  },
  {
    Tur: "SERGİ",
    Id: 5262,
    Adi: "Doğanın İzinde: Doğa Fotoğrafçılığı Sergisi",
    EtkinlikBitisTarihi: "2023-10-28T17:00:00",
    KucukAfis:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    EtkinlikMerkezi: "Doğa Sanat Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0217,
      Boylam: 28.9886,
    },
    KisaAciklama:
      "Doğanın güzelliklerini yansıtan etkileyici doğa fotoğrafları sergisi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    EtkinlikUrl: "doganin-izinde-doga-fotografciligi-sergisi",
    EtkinlikBaslamaTarihi: "2023-10-10T10:00:00",
    Sanatci: null,
  },
  {
    Tur: "SERGİ",
    Id: 5250,
    Adi: "Sinema Benim Aşkım - Türkan Soray Kostüm ve Afiş Sergisi",
    EtkinlikBitisTarihi: "2023-09-17T17:30:00",
    KucukAfis:
      "https://kultursanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Thumb/20230814_143647_ic.jpg",
    EtkinlikMerkezi: "Ahmed Adnan Saygun Sanat Merkezi",
    EtkinlikMerkeziKonum: {
      Enlem: 38.4149,
      Boylam: 27.1287,
    },
    KisaAciklama:
      "Yeşilçam`ın Sultanı Türkan Şoray`ın 1960`lardan günümüze kadar kullandığı kostümleri ve film afişleri sanatseverlerle buluşturuyor.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://kultursanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Kucuk/20230814_143640_etkinlik.jpg",
    EtkinlikUrl: "sinema-benim-askim-turkan-soray-kostum-ve-afis-sergisi",
    EtkinlikBaslamaTarihi: "2023-08-16T09:30:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5251,
    Adi: "Caz Gecesi: En İyi Caz Performansları",
    EtkinlikBitisTarihi: "2023-09-20T23:00:00",
    KucukAfis:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    EtkinlikMerkezi: "Jazz Up Sahne",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0085,
      Boylam: 28.9769,
    },
    KisaAciklama:
      "Cazın büyüleyici dünyasına adım atacağınız unutulmaz bir gece.",
    BiletSatisLinki: "https://orneklink.com/bilet2",
    UcretsizMi: false,
    Resim:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    EtkinlikUrl: "caz-gecesi-en-iyi-caz-performanslari",
    EtkinlikBaslamaTarihi: "2023-09-20T20:30:00",
    Sanatci: "Müge Ersoy",
  },
  {
    Tur: "TİYATRO",
    Id: 5252,
    Adi: "Komedi Şöleni: Gülme Garantili Komedi Oyunları",
    EtkinlikBitisTarihi: "2023-09-25T22:00:00",
    KucukAfis:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    EtkinlikMerkezi: "Gülmece Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0283,
      Boylam: 29.0015,
    },
    KisaAciklama:
      "Karnınız ağrıyana kadar güleceğiniz, komedi dolu bir gece sizi bekliyor!",
    BiletSatisLinki: "https://orneklink.com/bilet3",
    UcretsizMi: false,
    Resim:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    EtkinlikUrl: "komedi-soleni-gulme-garantili-komedi-oyunlari",
    EtkinlikBaslamaTarihi: "2023-09-25T19:30:00",
    Sanatci: null,
  },
  {
    Tur: "SERGİ",
    Id: 5253,
    Adi: "Rönesans Rüzgarları: Ressamların Büyülü Dünyası",
    EtkinlikBitisTarihi: "2023-09-30T18:00:00",
    KucukAfis: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    EtkinlikMerkezi: "Sanat Çağı Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0221,
      Boylam: 29.0058,
    },
    KisaAciklama:
      "Rönesans dönemi ressamlarının eşsiz eserlerinin sergilendiği etkileyici bir sergi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    EtkinlikUrl: "ronesans-ruzgarlari-ressamlarin-buyulu-dunyasi",
    EtkinlikBaslamaTarihi: "2023-09-20T10:00:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5254,
    Adi: "Rock Gecesi: Efsane Rock Gruplarından Seçkiler",
    EtkinlikBitisTarihi: "2023-10-05T23:30:00",
    KucukAfis:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    EtkinlikMerkezi: "Rock Arena",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0117,
      Boylam: 28.9755,
    },
    KisaAciklama:
      "Rock müziğin enerjisiyle dolu, unutulmaz bir gece sizi bekliyor!",
    BiletSatisLinki: "https://orneklink.com/bilet5",
    UcretsizMi: false,
    Resim:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    EtkinlikUrl: "rock-gecesi-efsane-rock-gruplarindan-seckiler",
    EtkinlikBaslamaTarihi: "2023-10-05T20:00:00",
    Sanatci: "Black Roses",
  },
  {
    Tur: "TİYATRO",
    Id: 5255,
    Adi: "Dramatik Yolculuklar: Duygusal Tiyatro Gecesi",
    EtkinlikBitisTarihi: "2023-10-10T21:30:00",
    KucukAfis:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    EtkinlikMerkezi: "Duygu Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0246,
      Boylam: 29.004,
    },
    KisaAciklama:
      "Derin duyguların işlendiği etkileyici bir tiyatro performansı.",
    BiletSatisLinki: "https://orneklink.com/bilet6",
    UcretsizMi: false,
    Resim:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    EtkinlikUrl: "dramatik-yolculuklar-duygusal-tiyatro-gecesi",
    EtkinlikBaslamaTarihi: "2023-10-10T19:00:00",
    Sanatci: null,
  },
  {
    Tur: "SERGİ",
    Id: 5256,
    Adi: "Modern Sanatın İzinde: Soyut Tablolar Sergisi",
    EtkinlikBitisTarihi: "2023-10-15T19:30:00",
    KucukAfis:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    EtkinlikMerkezi: "Soyut Sanat Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0189,
      Boylam: 28.9863,
    },
    KisaAciklama:
      "Modern sanatın en çarpıcı örneklerini bulabileceğiniz bir sergi deneyimi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    EtkinlikUrl: "modern-sanatin-izinde-soyut-tablolar-sergisi",
    EtkinlikBaslamaTarihi: "2023-10-01T13:00:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5257,
    Adi: "Klasik Akustik: En Sevilen Klasik Eseler",
    EtkinlikBitisTarihi: "2023-10-18T22:00:00",
    KucukAfis:
      "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    EtkinlikMerkezi: "Harmony Konser Salonu",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0102,
      Boylam: 28.9721,
    },
    KisaAciklama:
      "Klasik müziğin büyülü dünyasına klasik gitar eşliğinde unutulmaz bir yolculuk.",
    BiletSatisLinki: "https://orneklink.com/bilet8",
    UcretsizMi: false,
    Resim: "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    EtkinlikUrl: "klasik-akustik-en-sevilen-klasik-eserler",
    EtkinlikBaslamaTarihi: "2023-10-18T19:00:00",
    Sanatci: "Emre Aydın",
  },
  {
    Tur: "TİYATRO",
    Id: 5258,
    Adi: "Gizemli Sahneler: Polisiye Tiyatro Gösterisi",
    EtkinlikBitisTarihi: "2023-10-22T20:30:00",
    KucukAfis:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    EtkinlikMerkezi: "Gizem Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0297,
      Boylam: 29.0037,
    },
    KisaAciklama:
      "Gizem ve heyecan dolu polisiye tiyatro eserleriyle unutulmaz bir akşam.",
    BiletSatisLinki: "https://orneklink.com/bilet9",
    UcretsizMi: false,
    Resim:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    EtkinlikUrl: "gizemli-sahneler-polisiye-tiyatro-gosterisi",
    EtkinlikBaslamaTarihi: "2023-10-22T18:00:00",
    Sanatci: null,
  },
  {
    Tur: "SERGİ",
    Id: 52592,
    Adi: "Fotoğrafın İzinde: Anıların Peşinde",
    EtkinlikBitisTarihi: "2023-10-27T16:30:00",
    KucukAfis:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    EtkinlikMerkezi: "Anıt Galeri",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0158,
      Boylam: 28.9932,
    },
    KisaAciklama:
      "Fotoğraflarla geçmişe nostaljik bir yolculuk: Anıların izinde sergisi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    EtkinlikUrl: "fotografin-izinde-anilarin-pesinde",
    EtkinlikBaslamaTarihi: "2023-10-15T10:30:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 52605,
    Adi: "Jazz Gecesi: Akşamın Keyifli Notaları",
    EtkinlikBitisTarihi: "2023-11-05T23:00:00",
    KucukAfis: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    EtkinlikMerkezi: "Swing Jazz Club",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9865,
      Boylam: 29.0302,
    },
    KisaAciklama:
      "Soul ve cazın eşsiz birleşimiyle dolu bir akşamın tadını çıkarın.",
    BiletSatisLinki: "https://orneklink.com/bilet11",
    UcretsizMi: false,
    Resim: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    EtkinlikUrl: "jazz-gecesi-aksamin-keyifli-notalari",
    EtkinlikBaslamaTarihi: "2023-11-05T20:30:00",
    Sanatci: "Melis Sarp",
  },
  {
    Tur: "TİYATRO",
    Id: 52651,
    Adi: "Komedi Rüzgarları: Gülme Krizine Davet",
    EtkinlikBitisTarihi: "2023-11-10T22:00:00",
    KucukAfis:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    EtkinlikMerkezi: "Komedi Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0218,
      Boylam: 28.9769,
    },
    KisaAciklama:
      "Gülmekten karnınıza ağrı girecek bir komedi tiyatrosu deneyimi.",
    BiletSatisLinki: "https://orneklink.com/bilet12",
    UcretsizMi: false,
    Resim:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    EtkinlikUrl: "komedi-ruzgarlari-gulme-krizine-davet",
    EtkinlikBaslamaTarihi: "2023-11-10T19:30:00",
    Sanatci: "Komedi Guruları Ekibi",
  },
  {
    Tur: "KONSER",
    Id: 5263,
    Adi: "Pop Akustik: En İyi Yabancı Pop Şarkılar",
    EtkinlikBitisTarihi: "2023-11-20T21:00:00",
    KucukAfis:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-konserleri-667.jpg",
    EtkinlikMerkezi: "SoundUp Konser Salonu",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0056,
      Boylam: 28.985,
    },
    KisaAciklama:
      "Pop müziğin hit şarkılarını akustik düzenlemelerle dinleyeceğiniz bir gece.",
    BiletSatisLinki: "https://orneklink.com/bilet14",
    UcretsizMi: false,
    Resim:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-konserleri-667.jpg",
    EtkinlikUrl: "pop-akustik-en-iyi-yabanci-pop-sarkilar",
    EtkinlikBaslamaTarihi: "2023-11-20T18:30:00",
    Sanatci: "Dilara Oruç",
  },
  {
    Tur: "TİYATRO",
    Id: 5264,
    Adi: "Klasikler Sahnesi: Shakespeare Oyunları Gecesi",
    EtkinlikBitisTarihi: "2023-11-25T23:30:00",
    KucukAfis:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    EtkinlikMerkezi: "Klasik Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9998,
      Boylam: 29.0204,
    },
    KisaAciklama:
      "Shakespeare'ın en ünlü oyunlarının sahneleneceği büyülü bir gece.",
    BiletSatisLinki: "https://orneklink.com/bilet15",
    UcretsizMi: false,
    Resim:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    EtkinlikUrl: "klasikler-sahnesi-shakespeare-oyunlari-gecesi",
    EtkinlikBaslamaTarihi: "2023-11-25T20:00:00",
    Sanatci: "Klasik Tiyatro Topluluğu",
  },
  {
    Tur: "SERGİ",
    Id: 52265,
    Adi: "Renk İçinde Dans: Modern Sanat Sergisi",
    EtkinlikBitisTarihi: "2023-12-05T19:30:00",
    KucukAfis:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    EtkinlikMerkezi: "Modern Sanat Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0082,
      Boylam: 28.9765,
    },
    KisaAciklama:
      "Renklerin ve formların dansının yer aldığı çağdaş sanatın izleri.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    EtkinlikUrl: "renk-icinde-dans-modern-sanat-sergisi",
    EtkinlikBaslamaTarihi: "2023-12-01T10:00:00",
    Sanatci: "Modern Sanatçılar Derneği",
  },
  {
    Tur: "KONSER",
    Id: 5266,
    Adi: "Akustik Gitarın Büyülü Dünyası",
    EtkinlikBitisTarihi: "2023-12-10T22:30:00",
    KucukAfis:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    EtkinlikMerkezi: "Harmony Konser Salonu",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9937,
      Boylam: 29.0237,
    },
    KisaAciklama:
      "Akustik gitarın nağmeleriyle dolu sıcacık bir konser gecesi.",
    BiletSatisLinki: "https://orneklink.com/bilet17",
    UcretsizMi: false,
    Resim:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    EtkinlikUrl: "akustik-gitarin-buyulu-dunyasi",
    EtkinlikBaslamaTarihi: "2023-12-10T20:00:00",
    Sanatci: "Ege Yılmaz",
  },
  {
    Tur: "TİYATRO",
    Id: 5267,
    Adi: "Gizemli Yolculuk: Interaktif Tiyatro Deneyimi",
    EtkinlikBitisTarihi: "2023-12-15T21:45:00",
    KucukAfis:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    EtkinlikMerkezi: "Interaktif Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0125,
      Boylam: 28.9843,
    },
    KisaAciklama:
      "İzleyicilerin hikayenin bir parçası olduğu sürükleyici bir tiyatro yolculuğu.",
    BiletSatisLinki: "https://orneklink.com/bilet18",
    UcretsizMi: false,
    Resim:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    EtkinlikUrl: "gizemli-yolculuk-interaktif-tiyatro-deneyimi",
    EtkinlikBaslamaTarihi: "2023-12-15T19:00:00",
    Sanatci: "Interaktif Tiyatro Ekibi",
  },
  {
    Tur: "SERGİ",
    Id: 5268,
    Adi: "Işığın İzinde: Fotoğrafçılık Sergisi",
    EtkinlikBitisTarihi: "2023-12-20T20:30:00",
    KucukAfis:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    EtkinlikMerkezi: "FotoArt Galeri",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0067,
      Boylam: 28.9848,
    },
    KisaAciklama:
      "Işık ve gölge oyunlarının yakalandığı etkileyici bir fotoğraf sergisi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    EtkinlikUrl: "isigin-izinde-fotografcilik-sergisi",
    EtkinlikBaslamaTarihi: "2023-12-18T14:00:00",
    Sanatci: "Fotoğraf Sanatçıları Grubu",
  },
  {
    Tur: "KONSER",
    Id: 5269,
    Adi: "Rock Efsaneleri Canlı: Unutulmaz Hits",
    EtkinlikBitisTarihi: "2023-12-25T23:59:00",
    KucukAfis:
      "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    EtkinlikMerkezi: "RockArena Stadyumu",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9886,
      Boylam: 29.0231,
    },
    KisaAciklama:
      "Rock müziğin efsanevi şarkılarına doyacağınız muhteşem bir konser serisi.",
    BiletSatisLinki: "https://orneklink.com/bilet20",
    UcretsizMi: false,
    Resim: "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    EtkinlikUrl: "rock-efsaneleri-canli-unutulmaz-hits",
    EtkinlikBaslamaTarihi: "2023-12-25T20:00:00",
    Sanatci: "RockStar Tribute Band",
  },
  {
    Tur: "TİYATRO",
    Id: 5270,
    Adi: "Romeo ve Juliet: Modern Yorum",
    EtkinlikBitisTarihi: "2024-01-05T22:00:00",
    KucukAfis:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    EtkinlikMerkezi: "Şehir Tiyatrosu",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0134,
      Boylam: 28.9799,
    },
    KisaAciklama:
      "Klasikleşmiş aşk hikayesi Romeo ve Juliet'in modern bir yorumu.",
    BiletSatisLinki: "https://orneklink.com/bilet21",
    UcretsizMi: false,
    Resim:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    EtkinlikUrl: "romeo-ve-juliet-modern-yorum",
    EtkinlikBaslamaTarihi: "2024-01-05T19:30:00",
    Sanatci: "Genç Sahne Oyuncuları",
  },
  {
    Tur: "KONSER",
    Id: 5271,
    Adi: "Cazın Büyülü Dünyası: Geceyarısı Sesi",
    EtkinlikBitisTarihi: "2024-01-10T23:00:00",
    KucukAfis:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    EtkinlikMerkezi: "JazzClub",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0087,
      Boylam: 29.0126,
    },
    KisaAciklama:
      "Cazın büyülü ritimleriyle geçecek unutulmaz bir konser deneyimi.",
    BiletSatisLinki: "https://orneklink.com/bilet22",
    UcretsizMi: false,
    Resim:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    EtkinlikUrl: "cazin-buyulu-dunyasi-geceyarisi-sesi",
    EtkinlikBaslamaTarihi: "2024-01-10T21:00:00",
    Sanatci: "Jazz Delisi Orkestrası",
  },
  {
    Tur: "SERGİ",
    Id: 5272,
    Adi: "Geleceğin İzleri: Dijital Sanat Sergisi",
    EtkinlikBitisTarihi: "2024-01-15T18:30:00",
    KucukAfis:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    EtkinlikMerkezi: "Dijital Sanat Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0052,
      Boylam: 28.9814,
    },
    KisaAciklama:
      "Teknolojinin sanatla buluştuğu dijital eserlerin sergilendiği etkinlik.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    EtkinlikUrl: "gelecegin-izleri-dijital-sanat-sergisi",
    EtkinlikBaslamaTarihi: "2024-01-12T10:30:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5273,
    Adi: "Sinfonietta Akşamları: Beethoven'in İzinde",
    EtkinlikBitisTarihi: "2024-01-20T21:30:00",
    KucukAfis:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    EtkinlikMerkezi: "Devlet Senfoni Orkestrası Konser Salonu",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9879,
      Boylam: 29.0258,
    },
    KisaAciklama:
      "Beethoven'ın büyülü eserleriyle dolu bir akşamın keyfini çıkarın.",
    BiletSatisLinki: "https://orneklink.com/bilet24",
    UcretsizMi: false,
    Resim:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    EtkinlikUrl: "sinfonietta-aksamlari-beethovenin-izinde",
    EtkinlikBaslamaTarihi: "2024-01-20T19:00:00",
    Sanatci: "Devlet Senfoni Orkestrası",
  },
  {
    Tur: "TİYATRO",
    Id: 5274,
    Adi: "Büyülü Orman: Çocuk Tiyatro Gösterisi",
    EtkinlikBitisTarihi: "2024-01-25T17:00:00",
    KucukAfis:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    EtkinlikMerkezi: "Çocuk Tiyatro Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0091,
      Boylam: 28.9753,
    },
    KisaAciklama:
      "Çocukların hayal dünyasına yolculuk ettiren eğlenceli bir tiyatro gösterisi.",
    BiletSatisLinki: "https://orneklink.com/bilet25",
    UcretsizMi: false,
    Resim:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    EtkinlikUrl: "buyulu-orman-cocuk-tiyatro-gosterisi",
    EtkinlikBaslamaTarihi: "2024-01-25T15:30:00",
    Sanatci: "Çocuk Tiyatrosu Topluluğu",
  },
  {
    Tur: "SERGİ",
    Id: 5275,
    Adi: "Renk Şöleni: Modern Sanatın İzinde",
    EtkinlikBitisTarihi: "2024-02-01T20:00:00",
    KucukAfis:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    EtkinlikMerkezi: "Modern Sanat Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0037,
      Boylam: 28.9876,
    },
    KisaAciklama:
      "Farklı disiplinlerden modern sanat eserlerinin bir araya geldiği renkli sergi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    EtkinlikUrl: "renk-soleni-modern-sanatin-izinde",
    EtkinlikBaslamaTarihi: "2024-01-29T11:00:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5276,
    Adi: "Akustik Geceler: Unplugged Performanslar",
    EtkinlikBitisTarihi: "2024-02-05T23:30:00",
    KucukAfis:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    EtkinlikMerkezi: "Müzik Cafe",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0142,
      Boylam: 28.9749,
    },
    KisaAciklama:
      "Ünlü şarkıcıların akustik, enstrümantal performanslarıyla dolu özel bir gece.",
    BiletSatisLinki: "https://orneklink.com/bilet27",
    UcretsizMi: false,
    Resim:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    EtkinlikUrl: "akustik-geceler-unplugged-performanslar",
    EtkinlikBaslamaTarihi: "2024-02-05T20:00:00",
    Sanatci: "Çeşitli Sanatçılar",
  },
  {
    Tur: "TİYATRO",
    Id: 5277,
    Adi: "Komedi Manzaraları: Gülmek Garanti",
    EtkinlikBitisTarihi: "2024-02-10T21:30:00",
    KucukAfis: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    EtkinlikMerkezi: "Güldürme Sahnesi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0128,
      Boylam: 28.9871,
    },
    KisaAciklama:
      "Komedinin en iyilerinin sahne aldığı eğlenceli bir tiyatro şöleni.",
    BiletSatisLinki: "https://orneklink.com/bilet28",
    UcretsizMi: false,
    Resim: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    EtkinlikUrl: "komedi-manzaralari-gulmek-garanti",
    EtkinlikBaslamaTarihi: "2024-02-10T19:00:00",
    Sanatci: "Komedi Guruları Topluluğu",
  },
  {
    Tur: "SERGİ",
    Id: 5278,
    Adi: "Rüya Gibi Fotoğraflar: Anı Yakalama Sanatı",
    EtkinlikBitisTarihi: "2024-02-15T19:30:00",
    KucukAfis:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    EtkinlikMerkezi: "Fotoğraf Galerisi",
    EtkinlikMerkeziKonum: {
      Enlem: 40.9976,
      Boylam: 29.0351,
    },
    KisaAciklama:
      "Ünlü fotoğrafçıların anı yakalama sanatının sergilendiği etkinlik.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    EtkinlikUrl: "ruya-gibi-fotograflar-ani-yakalama-sanati",
    EtkinlikBaslamaTarihi: "2024-02-12T15:00:00",
    Sanatci: null,
  },
  {
    Tur: "KONSER",
    Id: 5279,
    Adi: "Dünya Ritmileri Gecesi",
    EtkinlikBitisTarihi: "2024-02-20T22:30:00",
    KucukAfis:
      "https://cdn.seturday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    EtkinlikMerkezi: "Kültür Merkezi",
    EtkinlikMerkeziKonum: {
      Enlem: 41.0015,
      Boylam: 28.9827,
    },
    KisaAciklama:
      "Farklı ülkelerden geleneksel ritimlerin harmanlandığı eşsiz bir konser deneyimi.",
    BiletSatisLinki: "https://orneklink.com/bilet30",
    UcretsizMi: false,
    Resim:
      "https://cdn.seturday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    EtkinlikUrl: "dunya-ritmileri-gecesi",
    EtkinlikBaslamaTarihi: "2024-02-20T20:00:00",
    Sanatci: "Dünya Ritm Grubu",
  },
  {
    Tur: "FESTIVAL",
    Id: 5351,
    Adi: "Yaz Müziği Festivali",
    EtkinlikBitisTarihi: "2023-08-29T23:59:00",
    KucukAfis:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    EtkinlikMerkezi: "İstanbul Park",
    KisaAciklama:
      "Yazın coşkusunu en iyi müziklerle yaşayacağınız muhteşem bir festival deneyimi!",
    BiletSatisLinki: "https://example.com/yaz-muzigi-festivali-biletleri",
    UcretsizMi: false,
    Resim:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    EtkinlikUrl: "yaz-muzigi-festivali",
    EtkinlikBaslamaTarihi: "2023-08-27T14:00:00",
    Sanatci: "Sezen Aksu, Teoman, Duman, Athena",
  },
  {
    Tur: "FESTIVAL",
    Id: 5372,
    Adi: "Yaz Renkleri Müzik Festivali",
    EtkinlikBitisTarihi: "2023-09-03T23:59:00",
    KucukAfis:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-turu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    EtkinlikMerkezi: "Açık Hava Alanı",
    KisaAciklama:
      "Yazın tadını çıkarabileceğiniz renkli ve enerjik bir müzik festivali.",
    BiletSatisLinki: "https://example.com/yaz-renkleri-festival-biletleri",
    UcretsizMi: false,
    Resim:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-turu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    EtkinlikUrl: "yaz-renkleri-muzik-festivali",
    EtkinlikBaslamaTarihi: "2023-09-02T16:00:00",
    Sanatci: "Sanatçı C, Sanatçı D",
  },
  {
    Tur: "TALKSHOW",
    Id: 5381,
    Adi: "Bilim ve Gelecek Paneli",
    EtkinlikBitisTarihi: "2023-09-10T21:00:00",
    KucukAfis: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    EtkinlikMerkezi: "Bilim Kültür Merkezi",
    KisaAciklama:
      "Bilim insanlarının katılacağı ilgi çekici bir gelecek paneli.",
    BiletSatisLinki: "https://example.com/gelecek-paneli-biletleri",
    UcretsizMi: true,
    Resim: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    EtkinlikUrl: "bilim-ve-gelecek-paneli",
    EtkinlikBaslamaTarihi: "2023-09-10T18:30:00",
    Sanatci: null,
  },
  {
    Tur: "SPORTIF",
    Id: 5382,
    Adi: "Yoga ve Meditasyon Workshop",
    EtkinlikBitisTarihi: "2023-09-08T19:30:00",
    KucukAfis:
      "https://yogakiooturkiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    EtkinlikMerkezi: "Yoga Merkezi",
    KisaAciklama:
      "Zihin ve beden sağlığınıza katkı sağlayacak yoga ve meditasyon workshop'u.",
    BiletSatisLinki: "https://example.com/yoga-workshop-biletleri",
    UcretsizMi: false,
    Resim:
      "https://yogakiooturkiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    EtkinlikUrl: "yoga-ve-meditasyon-workshop",
    EtkinlikBaslamaTarihi: "2023-09-08T17:00:00",
    Sanatci: null,
  },
  {
    Tur: "FESTIVAL",
    Id: 5402,
    Adi: "Çiçek Festivali",
    EtkinlikBitisTarihi: "2023-09-05T20:00:00",
    KucukAfis:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    EtkinlikMerkezi: "Park Alanı",
    KisaAciklama: "Renkli çiçeklerle dolu büyüleyici bir festival deneyimi.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    EtkinlikUrl: "cicek-festivali",
    EtkinlikBaslamaTarihi: "2023-09-02T10:00:00",
    Sanatci: null,
    EtkinlikMerkeziKonum: {
      Enlem: 40.7128,
      Boylam: -74.006,
    },
  },

  // TALKSHOW türündeki etkinlikler
  {
    Tur: "TALKSHOW",
    Id: 5407,
    Adi: "Psikoloji Sohbetleri",
    EtkinlikBitisTarihi: "2023-09-12T20:30:00",
    KucukAfis:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    EtkinlikMerkezi: "Kültür Merkezi",
    KisaAciklama:
      "Ruh sağlığı ve psikoloji alanında uzmanların katılacağı interaktif bir sohbet.",
    BiletSatisLinki: "https://example.com/psikoloji-sohbetleri-biletleri",
    UcretsizMi: false,
    Resim:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    EtkinlikUrl: "psikoloji-sohbetleri",
    EtkinlikBaslamaTarihi: "2023-09-12T18:00:00",
    Sanatci: null,
    EtkinlikMerkeziKonum: {
      Enlem: 52.52,
      Boylam: 13.405,
    },
  },
  {
    Tur: "TALKSHOW",
    Id: 5408,
    Adi: "Teknoloji Sohbetleri",
    EtkinlikBitisTarihi: "2023-09-06T19:00:00",
    KucukAfis:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    EtkinlikMerkezi: "İnovasyon Merkezi",
    KisaAciklama:
      "Teknoloji dünyasının önde gelen isimlerinin katılacağı bir teknoloji sohbeti.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    EtkinlikUrl: "teknoloji-sohbetleri",
    EtkinlikBaslamaTarihi: "2023-09-06T16:30:00",
    Sanatci: null,
    EtkinlikMerkeziKonum: {
      Enlem: 37.7749,
      Boylam: -122.4194,
    },
  },

  // SPORTIF türündeki etkinlikler
  {
    Tur: "SPORTIF",
    Id: 5409,
    Adi: "Bisiklet Turu",
    EtkinlikBitisTarihi: "2023-09-09T12:00:00",
    KucukAfis:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-turu-aa-1833973.jpg",
    EtkinlikMerkezi: "Şehir Parkuru",
    KisaAciklama: "Doğayla iç içe keyifli bir bisiklet turu deneyimi.",
    BiletSatisLinki: "https://example.com/bisiklet-turu-biletleri",
    UcretsizMi: false,
    Resim:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-turu-aa-1833973.jpg",
    EtkinlikUrl: "bisiklet-turu",
    EtkinlikBaslamaTarihi: "2023-09-09T09:00:00",
    Sanatci: null,
    EtkinlikMerkeziKonum: {
      Enlem: 40.7128,
      Boylam: -74.006,
    },
  },
  {
    Tur: "SPORTIF",
    Id: 5410,
    Adi: "Tenis Turnuvası",
    EtkinlikBitisTarihi: "2023-09-12T17:30:00",
    KucukAfis:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    EtkinlikMerkezi: "Tenis Kulübü",
    KisaAciklama: "Heyecan dolu bir tenis turnuvası ve rekabet dolu maçlar.",
    BiletSatisLinki: "https://example.com/tenis-turnuvasi-biletleri",
    UcretsizMi: false,
    Resim: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    EtkinlikUrl: "tenis-turnuvasi",
    EtkinlikBaslamaTarihi: "2023-09-12T14:00:00",
    Sanatci: null,
    EtkinlikMerkeziKonum: {
      Enlem: 51.1657,
      Boylam: 10.4515,
    },
  },
];

export const getCategories = () => {
  let categories = [];
  DATA.forEach((etkinlik) => {
    if (!categories.includes(etkinlik.Tur)) {
      categories.push(etkinlik.Tur);
    }
  });
  return categories;
};

export const getEventsByCategory = (category) => {
  return DATA.filter((etkinlik) => etkinlik.Tur === category);
};

export const getAllEvent = () => {
  return DATA;
};

export const getEventById = (id) => {
  return DATA.find((etkinlik) => etkinlik.Id === id);
};

export const getOldEvents = () => {
  return DATA.filter((etkinlik) => {
    let today = new Date();
    let etkinlikTarihi = new Date(etkinlik.EtkinlikBaslamaTarihi);
    return etkinlikTarihi < today;
  });
};
