import React from "react";
import WorkYear from "../WorkYear/WorkYear";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import "./WorkYearContainer.scss"

// let data = [
//   {
//     year: 2022,
//     category: "work",
//     name: "I look at you seeing through me",
//     size: "55.5x50in",
//     technique: "Oil on Canvas",
//     img1: "https://i.imgur.com/bAc5Qci.jpg",
//     img2: "https://i.imgur.com/IaaLLF2.jpg",
//     img3: "https://i.imgur.com/WGdtd0x.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Angeles caídos, veo sangre en mis manos mientras me abrazas",
//     size: "72x90in",
//     technique: "Oil and Charcoal on Canvas",
//     img1: "https://i.imgur.com/ibzSMxR.jpg",
//     img2: "https://i.imgur.com/03TVUaw.jpg",
//     img3: "https://i.imgur.com/1VoG60s.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Apertura",
//     size: "72x84in",
//     technique: "Oil and Charcoal on Canvas",
//     img1: "https://i.imgur.com/U0JYHfJ.jpg",
//     img2: "https://i.imgur.com/03TVUaw.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Blue blood",
//     size: "72x84in",
//     technique: "Oil and Charcoal on Canvas",
//     img1: "https://i.imgur.com/hLThIpe.jpg",
//     img2: "https://i.imgur.com/OgjlzaI.jpg",
//     img3: "https://i.imgur.com/pAF16Cz.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Facemask on fire (Me quemaste la cara)",
//     size: "72x90in",
//     technique: "Oil on Canvas",
//     img1: "https://i.imgur.com/0R9LOGj.jpg",
//     img2: "https://i.imgur.com/pPfwvjG.jpg",
//     img3: "https://i.imgur.com/qmBy618.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Sleeping lover",
//     size: "62.5x45.5in",
//     technique: "Oil on Canvas",
//     img1: "https://i.imgur.com/5YJt33Z.jpg",
//     img2: "https://i.imgur.com/TL8hp17.jpg",
//     img3: "https://i.imgur.com/lbBxg7B.jpg",
//   },
//   {
//     year: 2022,
//     category: "work",
//     name: "Vos Dejarias tu Carrera Para Tener un Hijo; I Can't Get My Hands on You",
//     size: "72 x 84 in",
//     technique: "Oil and Charcoal on Canvas",
//     img1: "https://i.imgur.com/TrtEozw.jpg",
//     img2: "https://i.imgur.com/qvyPoLh.jpg",
//     img3: "https://i.imgur.com/2J3ErHV.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "A Rugrats Dream",
//     size: "90 x 72 in",
//     technique: " Oil on Canvas",
//     img1: "https://i.imgur.com/xmSQNdv.jpg",
//     img2: "https://i.imgur.com/hAcEnDr.jpg",
//     img3: "https://i.imgur.com/VLxaX3y.jpg",
//     img4: "https://i.imgur.com/qtW7bIr.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "Charla de Seis",
//     size: "84 x 72 in",
//     technique: " Oil on Canvas",
//     img1: "https://i.imgur.com/l6nHDxC.jpg",
//     img2: "https://i.imgur.com/olCm3Sr.jpg",
//     img3: "https://i.imgur.com/S00sOu6.jpg",
//     img4: "https://i.imgur.com/W1cPWfY.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "CPR (Respiracion Boca a Boca)",
//     size: "72 x 90 in",
//     technique: " Oil and Mixed Media on Canvas",
//     img1: "https://i.imgur.com/n5vYUsk.jpg",
//     img2: "https://i.imgur.com/Xxug8Wn.jpg",
//     img3: "https://i.imgur.com/noBhnmn.jpg",
//     img4: "https://i.imgur.com/inW1CUg.jpg",
//     img5: "https://i.imgur.com/kOkyX9H.jpg",
//   },

//   {
//     year: 2021,
//     category: "work",
//     name: "Desire Against Morality",
//     size: "72 x 80 in",
//     technique: "Oil and Mixed Media on Canvas",
//     img1: "https://i.imgur.com/MJI1YRl.jpg",
//     img2: "https://i.imgur.com/r8Mxeyu.jpg",
//     img3: "https://i.imgur.com/cg2E64y.jpg",
//     img4: "https://i.imgur.com/9m2NvS5.jpg",
//     img5: "https://i.imgur.com/5t284O5.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "Queen of the Moon",
//     size: "38 x 56 in",
//     technique: "Oil and Charcoal on Canvas",
//     img1: "https://i.imgur.com/coN7rNW.jpg",
//     img2: "https://i.imgur.com/Fcg6jlM.jpg",
//     img3: "https://i.imgur.com/Tp9ovEZ.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "The Bathtub",
//     size: "96 x 116 in",
//     technique: " Oil on Canvas",
//     img1: "https://i.imgur.com/AvRixjS.jpg",
//     img2: "https://i.imgur.com/qJ4ADmt.jpg",
//     img3: "https://i.imgur.com/uYAqALh.jpg",
//     img4: "https://i.imgur.com/qjZ3cij.jpg",
//     img5: "https://i.imgur.com/DoZAoHY.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "The Green Bed",
//     size: "72 x 60 in",
//     technique: " Oil on Canvas",
//     img1: "https://i.imgur.com/dlFz4uo.jpg",
//     img2: "https://i.imgur.com/cXZ4Zq3.jpg",
//     img3: "https://i.imgur.com/Fd6sDuf.jpg",
//     img4: "https://i.imgur.com/qXizdr4.jpg",
//     img5: "https://i.imgur.com/azDcjQF.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "The King Baby Possessor (diptych)",
//     size: "72 x 168 in",
//     technique: "Oil and Mixed Media on Canvas",
//     img1: "https://i.imgur.com/wPcmA7m.jpg",
//     img2: "https://i.imgur.com/j9rxhIU.jpg",
//     img3: "https://i.imgur.com/FsTZEdY.jpg",
//     img4: "https://i.imgur.com/DHoOKgX.jpg",
//     img5: "https://i.imgur.com/9xaPtRz.jpg",
//   },
//   {
//     year: 2021,
//     category: "work",
//     name: "The Shaman",
//     size: "84 x 72 in",
//     technique: " Oil and Acrylic on Canvas",
//     img1: "https://i.imgur.com/QfkvF2y.jpg",
//     img2: "https://i.imgur.com/bjzFjjw.jpg",
//     img3: "https://i.imgur.com/1s3moNt.jpg",
//     img4: "https://i.imgur.com/xglmXbX.jpg",
//     img5: "https://i.imgur.com/FwfMe1h.jpg",
//   },
//   {
//     year: 2020,
//     category: "work",
//     name: "Baby Fever Fear",
//     size: "76x78in",
//     technique: "Oil on Canvas",
//     img1: "https://i.imgur.com/zeHLtXw.jpg",
//     img2: "https://i.imgur.com/hdAa1CH.jpg",
//     img3: "https://i.imgur.com/iqhBrM1.jpg",
//     img4: "https://i.imgur.com/Mw1czMU.jpg",
//   },
//   {
//     year: 2020,
//     category: "work",
//     name: "Distraída por el Deseo",
//     size: "74x50in",
//     technique: "Pastel on Canvas",
//     img1: "https://i.imgur.com/7nYOIc2.jpg",
//     img2: "https://i.imgur.com/ctVnMST.jpg",
//     img3: "https://i.imgur.com/iW9jkSX.jpg",
//     img4: "https://i.imgur.com/VTuzvus.jpg",
//   },
//   {
//     year: 2020,
//     category: "work",
//     name: "El sueño de la razon produce monstruos",
//     size: "60x80in",
//     technique: "Oil and Mixed Media on Canvas",
//     img1: "https://i.imgur.com/veQo98K.jpg",
//     img2: "https://i.imgur.com/2lJ8abE.jpg",
//     img3: "https://i.imgur.com/iRQPqFO.jpg",
//     img4: "https://i.imgur.com/zKTK82s.jpg",
//     img5: "https://i.imgur.com/13yaBmP.jpg",
//   },
//   {
//     year: 2020,
//     category: "work",
//     name: "Meet the parents",
//     size: "60x40in",
//     technique: "Oil and Mixed Media on Canvas",
//     img1: "https://i.imgur.com/GQzmbKk.jpg",
//     img2: "https://i.imgur.com/sTD3PJG.jpg",
//     img3: "https://i.imgur.com/wqdbKhr.jpg",
//     img4: "https://i.imgur.com/mMXup4Z.jpg",
//     img5: "https://i.imgur.com/O5SO3VB.jpg",
//   },
//   {
//     year: 2020,
//     category: "work",
//     name: "The commute",
//     size: "90x70in",
//     technique: "Oil on Canvas",
//     img1: "https://i.imgur.com/1Eh7W0t.jpg",
//     img2: "https://i.imgur.com/uAXo3th.jpg",
//     img3: "https://i.imgur.com/lgJsr9i.jpg",
//     img4: "https://i.imgur.com/m30uCrs.jpg",
//     img5: "https://i.imgur.com/ZBOG4Yc.jpg",
//   },

  // === EXHIBITIONS === //

//   {
//     year: 2022,
//     category: "exhibitions",
//     name: "Barlice Hertling",
//     size: "",
//     technique: "",
//     img1: "https://i.imgur.com/FHXL9I6.jpg",
//     img2: "https://i.imgur.com/bZzGqPs.jpg",
//     img3: "https://i.imgur.com/8F765MP.jpg",
//     img4: "https://i.imgur.com/D1GLI8s.jpg",
//     img5: "https://i.imgur.com/WLPMalE.jpg",
//     img6: "https://i.imgur.com/YQUSaZ7.jpg",
//     img7: "https://i.imgur.com/iKFM9VM.jpg",
//     img8: "https://i.imgur.com/jJg64Of.jpg",
//     img9: "https://i.imgur.com/lcVaERb.jpg",
//     img10: "https://i.imgur.com/c0cRG0d.jpg",
//     img11: "https://i.imgur.com/efzLnFh.jpg",
//     img12: "https://i.imgur.com/tRfXWiu.jpg",
//     img13: "https://i.imgur.com/wXIXWMr.jpg",
//     img14: "https://i.imgur.com/ZcKhQh5.jpg",
//   },
//   {
//     year: 2022,
//     category: "exhibitions",
//     name: "Lyles & King",
//     size: "",
//     technique: "",
//     img1: "https://i.imgur.com/Ql15SrX.jpg",
//     img2: "https://i.imgur.com/UfMPVgc.jpg",
//     img3: "https://i.imgur.com/7jJPgBG.jpg",
//     img4: "https://i.imgur.com/DY2uzsl.jpg",
//     img5: "https://i.imgur.com/XJfBwgx.jpg",
//     img6: "https://i.imgur.com/oQZdN1Z.jpg",
//     img7: "https://i.imgur.com/Yym91YB.jpg",
//   },
//   {
//     year: 2021,
//     category: "exhibitions",
//     name: "MFA Thesis Show",
//     size: "",
//     technique: "",
//     img1: "https://i.imgur.com/wPcmA7m.jpg",
//     img2: "https://i.imgur.com/376sQuA.jpg",
//     img3: "https://i.imgur.com/pZmlxBe.jpg",
//     img4: "https://i.imgur.com/rhlrVwb.jpg",
//     img5: "https://i.imgur.com/wT82UWp.jpg",
//     img6: "https://i.imgur.com/Zwqi4I1.jpg",
//     img7: "https://i.imgur.com/OWP2VQC.jpg",
//     img8: "https://i.imgur.com/L1ATlDT.jpg",
//   },
// ];

function WorkYearContainer() {
  // FUNCTION TO UPLOAD ALL THE PAINTINGS TO FIREBASE

  // function addDocsFb() {
  //   data.forEach((testItem) => {
  //     const db = getFirestore();

  //     const queryCollection = collection(db, "works");

  //     addDoc(queryCollection, testItem).then((resp) => console.log(resp));
  //   });
  // }

  //FILTERING WORKS BY YEAR

  const [works, setWorks] = useState([]);

  const { category,year } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "works");

    const queryCollectionFilter = query(
      queryCollection,where("category","==",category),
      where("year", "==", Number(year))
    );

    // const queryCollectionType=query(queryCollectionFilter,where("category","==","work"))

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setWorks(resp.docs.map((work) => ({ ...work.data(), id: work.id })))
      )
      .catch((err) => console.log(err));
  }, [category,year]);

  return (
    <div className="workYear">
      <WorkYear  data={works} />
    </div>
  );
}

export default WorkYearContainer;
