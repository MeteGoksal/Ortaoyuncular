import { FunctionComponent, useCallback } from "react";
import styles from "./Desktop1.module.css";
const Desktop1: FunctionComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Desktop - 3" to the project
  }, []);

  const onN1Image1Click = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.frameParent}>
        <div className={styles.oyunlarParent}>
          <b className={styles.oyunlar}>Oyunlar</b>
          <b className={styles.oyunlar}>Online</b>
        </div>
        <div className={styles.frameWrapper} onClick={onGroupContainerClick}>
          <div className={styles.tablerIconMenu2Parent}>
            <img
              className={styles.tablerIconMapPin}
              alt=""
              src="/tablericonmenu2.svg"
            />
            <b className={styles.oyunlar}>Menu</b>
          </div>
        </div>
      </div>
      <img
        className={styles.n1Icon}
        alt=""
        src="/314319632-505360068276993-6123193428887295815-n-1@2x.png"
      />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <b className={styles.nisan}>Nisan</b>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b}>3</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b}>4</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b}>5</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <b className={styles.b}>6</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <b className={styles.b}>7</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <div className={styles.groupChild1} />
          <b className={styles.b}>8</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b}>9</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b7}>10</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.b8}>11</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild8} />
          <div className={styles.groupChild8} />
          <b className={styles.b7}>12</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <b className={styles.nisan}>Mayıs</b>
          </div>
        </div>
      </div>
      <div className={styles.desktop1Inner}>
        <div className={styles.vectorContainer}>
          <img
            className={styles.vectorContainer}
            alt=""
            src="/rectangle-2.svg"
          />
          <div className={styles.ahlarDaVururlarParent}>
            <div className={styles.oyunlar}>Şahları da Vururlar</div>
            <div className={styles.yazanFerhanEnsoyParent}>
              <div className={styles.oyunlar}>Yazan: Ferhan Şensoy</div>
              <div className={styles.oyunlar}>Yönetmen: Volkan Sarıöz</div>
            </div>
          </div>
          <b className={styles.biletAl}>Bilet Al</b>
          <div className={styles.dahaFazlaBilgi}>Daha Fazla Bilgi</div>
        </div>
      </div>
      <img
        className={styles.logoOrtaoyuncular2Icon}
        alt=""
        src="/logoortaoyuncular-2@2x.png"
      />
      <img
        className={styles.logoOrtaoyuncular3Icon}
        alt=""
        src="/logoortaoyuncular-2@2x.png"
      />
      <div className={styles.n1Parent}>
        <img
          className={styles.n1Icon1}
          alt=""
          src="/314390274-505360061610327-7377208614849888344-n-1@2x.png"
          onClick={onN1Image1Click}
        />
        <img className={styles.icon} alt="" src="/154896-1@2x.png" />
        <div className={styles.groupChild11} />
        <div className={styles.groupChild12} />
        <b className={styles.ahlarDaVururlar1}>Şahları Da Vururlar</b>
        <b className={styles.tarlaKuuyduJuliet}>Tarla Kuşuydu Juliet</b>
        <div className={styles.frameGroup}>
          <div className={styles.ferhanEnsoyun1980YlndaWrapper}>
            <div className={styles.drdrcBirJuliet}>
              Ferhan Şensoy’un 1980 yılında yazıp sahneye koyduğu müzikli
              güldürü Şahları Da Vururlar, 42 yıl sonra yeniden seyirciyle
              buluşuyor.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.tablerIconMapPinParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonmappin.svg"
                />
                <div className={styles.oyunlar}>Ses Tiyatrosu</div>
              </div>
              <b className={styles.haziranaKadar}>10 Haziran’a kadar</b>
            </div>
            <div className={styles.biletAlWrapper}>
              <b className={styles.oyunlar}>Bilet Al</b>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.ferhanEnsoyun1980YlndaWrapper}>
            <div className={styles.drdrcBirJuliet}>
              Dırdırcı bir Juliet ve günden güne aşığına ilgisi azalan bir
              Romeo... Tarihin efsanevi âşıklarını alışılmışın dışında bir
              ilişkinin içinde izlemek için “Tarla Kuşuydu Juliet”i kaçırmayın!
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.tablerIconMapPinParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonmappin.svg"
                />
                <div className={styles.oyunlar}>Ses Tiyatrosu</div>
              </div>
              <b className={styles.haziranaKadar}>7 Haziran</b>
            </div>
            <div className={styles.biletAlWrapper}>
              <b className={styles.oyunlar}>Bilet Al</b>
            </div>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupChild13} />
      </div>
      <div className={styles.oyunlarGroup}>
        <b className={styles.oyunlar1}>Oyunlar</b>
        <div className={styles.groupChild14} />
        <img className={styles.lineIcon} alt="" src="/line-4.svg" />
      </div>
      <div className={styles.desktop1Child} />
      <div className={styles.screenShot20230420At111Parent}>
        <img
          className={styles.screenShot20230420At111}
          alt=""
          src="/screen-shot-20230420-at-1114-1@2x.png"
        />
        <div className={styles.groupChild15} />
        <div className={styles.ferhangiEylerParent}>
          <b className={styles.oyunlar}>Ferhangi Şeyler</b>
          <div className={styles.ferhangiEylerFerhanContainer}>
            <p className={styles.ferhangiEylerFerhan}>
              Ferhangi Şeyler, Ferhan Şensoy’un 7 Mart 1987’den beri aralıksız
              oynadığı tek kişilik gösterisidir. Şensoy bu oyunda gündelik
              olayları kendince, mizahi bir dille değerlendirir.
            </p>
            <p className={styles.ferhangiEylerFerhan}>
              Ev sahibi Orkinos Hanım, bakkalın aptal çırağı, avukat Tayfun gibi
              hayali karakterlerin bulunduğu oyun, 2015 yılının Aralık ayında,
              İstanbul Bostancı Gösteri Merkezi’nde özel bir gösterimle 2000.
              kez izleyiciyle buluştu. Çoğunlukla Şensoy’un kendi tiyatrosu olan
              Ses Tiyatrosu’nda sahnelenen Ferhangi Şeyler iki perdedir.
            </p>
          </div>
        </div>
        <div className={styles.tablerIconPlayerPlayFilledParent}>
          <img
            className={styles.tablerIconMapPin}
            alt=""
            src="/tablericonplayerplayfilled.svg"
          />
          <b className={styles.oyunlar}>Şimdi İzle</b>
        </div>
      </div>
      <div className={styles.onlineParent}>
        <b className={styles.oyunlar1}>Online</b>
        <div className={styles.groupChild16} />
        <div className={styles.groupChild17} />
      </div>
      <div className={styles.online2}>
        <div className={styles.onlineChild} />
        <div className={styles.onlineItem} />
        <div className={styles.onlineInner} />
        <img className={styles.download11} alt="" src="/download-1-1@2x.png" />
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild18} />
          <div className={styles.download1Parent}>
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-1@2x.png"
            />
            <b className={styles.seyirciliSeyirDefteri}>
              Seyircili Seyir Defteri
            </b>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild19} />
          <img
            className={styles.download1Icon}
            alt=""
            src="/galeri-istanbulsatiyorumb-obnay0rr5s-1@2x.png"
          />
          <b className={styles.seyirciliSeyirDefteri}>İstanbul’u Satıyorum</b>
          <b className={styles.sizlerCenneteGider}>İşsizler Cennete Gider</b>
          <b className={styles.paraszYaamakPahal}>Parasız Yaşamak Pahalı</b>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild20} />
          </div>
          <img
            className={styles.download1Icon}
            alt=""
            src="/ortaoyuncular-uckuruslukopera3-1@2x.png"
          />
          <b className={styles.kurunlukOpera}>Üç Kurşunluk Opera</b>
          <b className={styles.nasriHocaVe}>Nasri Hoca ve Muhalif Eşeği</b>
        </div>
        <img className={styles.download2Icon} alt="" src="/download-2@2x.png" />
        <img className={styles.download21} alt="" src="/download-2-1@2x.png" />
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.kurumsalParent}>
              <b className={styles.oyunlar}>Kurumsal</b>
              <div className={styles.hakkmzdaParent}>
                <div className={styles.oyunlar}>Hakkımızda</div>
                <div className={styles.oyunlar}>Ferhan Şensoy</div>
                <div className={styles.oyunlar}>Ses 1885</div>
                <div className={styles.oyunlar}>Galeri</div>
                <div className={styles.oyunlar}>İletişim</div>
              </div>
            </div>
            <div className={styles.kurumsalParent}>
              <b className={styles.oyunlar}>Mağaza</b>
              <div className={styles.hakkmzdaParent}>
                <div className={styles.oyunlar}>Ferhangiysiler</div>
                <div className={styles.oyunlar}>Oyun Afişleri</div>
                <div className={styles.oyunlar}>Kitaplar</div>
              </div>
            </div>
            <div className={styles.kurumsalParent}>
              <b className={styles.oyunlar}>Alışveriş Bilgileri</b>
              <div className={styles.hakkmzdaParent}>
                <div className={styles.oyunlar}>Sipariş</div>
                <div className={styles.oyunlar}>Sepetim</div>
                <div className={styles.oyunlar}>İade Taleplerim</div>
                <div className={styles.oyunlar}>Sipariş Takibi</div>
                <div className={styles.oyunlar}>Hesabım</div>
              </div>
            </div>
            <div className={styles.kurumsalParent}>
              <b className={styles.oyunlar}>Müşteri Hizmetleri</b>
              <div className={styles.hakkmzdaParent}>
                <div className={styles.oyunlar}>Gizlilik ve Güvenlik</div>
                <div className={styles.oyunlar}>Havale /EFT</div>
                <div className={styles.oyunlar}>
                  Mesafeli Satış Sözleşmeleri
                </div>
                <div className={styles.oyunlar}>SSS</div>
              </div>
            </div>
            <div className={styles.kurumsalParent}>
              <b className={styles.oyunlar}>E-Bülten</b>
              <div className={styles.kampanyalarmzdanVeGncelOWrapper}>
                <div className={styles.oyunlar}>
                  <p className={styles.ferhangiEylerFerhan}>
                    Kampanyalarımızdan ve güncel oyunları
                  </p>
                  <p className={styles.ferhangiEylerFerhan}>
                    mızdan haberdar olun.
                  </p>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild21} />
                <div className={styles.ePostaAdresiniziYazn}>
                  E-posta adresinizi yazın
                </div>
                <b className={styles.gnder}>Gönder</b>
              </div>
            </div>
          </div>
          <div className={styles.kurumsalParent}>
            <div className={styles.takipEdinWrapper}>
              <b className={styles.oyunlar}>Takip Edin</b>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.tablerIconBrandTwitterParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonbrandtwitter.svg"
                />
                <b className={styles.oyunlar}>Twitter</b>
              </div>
              <div className={styles.tablerIconBrandTwitterParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonbrandinstagram.svg"
                />
                <b className={styles.oyunlar}>Instagram</b>
              </div>
              <div className={styles.tablerIconBrandTwitterParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonbrandfacebook.svg"
                />
                <b className={styles.oyunlar}>Facebook</b>
              </div>
              <div className={styles.tablerIconBrandTwitterParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonbrandyoutube.svg"
                />
                <b className={styles.oyunlar}>YouTube</b>
              </div>
              <div className={styles.tablerIconBrandTwitterParent}>
                <img
                  className={styles.tablerIconMapPin}
                  alt=""
                  src="/tablericonbrandtiktok.svg"
                />
                <b className={styles.oyunlar}>TikTok</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ortaoyuncular1980deFerhanContainer}>
        <p className={styles.ferhangiEylerFerhan}>
          Ortaoyuncular, 1980’de Ferhan Şensoy tarafından kurulan, Türkiye’nin
          en köklü tiyatro kuruluşlarından biridir. Yapı Endüstri Merkezi’nde
        </p>
        <p className={styles.ferhangiEylerFerhan}>
          gerçekleştirilen ilk tiyatro oyununda “Şahları Da Vururlar” ile ilk
          defa İstanbullular ile buluşan tiyatromuz, Türk tiyatro dünyasında
          yüzlerce
        </p>
        <p
          className={styles.ferhangiEylerFerhan}
        >{`kişi ve eser kazandırmıştır.   `}</p>
      </div>
    </div>
  );
};

export default Desktop1;
