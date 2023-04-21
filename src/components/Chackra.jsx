import React from "react";
import Style from "../Styles/testimonial.module.css";
import style from "../Styles/chakra.module.css";

const Chackra = () => {
  return (
    <div className={style.chakra}>
      <div className={Style.heading}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <span>Many Problem one Solution</span>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </div>
      <div className={style.fullChakraDiv}>
        <div className={style.sideDiv}>
          <div className={style.subDiv}>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232818785-446f8508-c970-40bb-907b-d3b428e3ea8f.png"
                alt="love"
              />
            </div>
            <div className={style.divDetails}>Love Related Problem</div>
          </div>
          <div className={style.subDiv}>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232790447-dd15a99d-1cb0-4cf7-9812-d8126dd9025a.png"
                alt="marrige-ring"
              />
            </div>
            <div className={style.divDetails}>Marriage Problem</div>
          </div>
          <div className={style.subDiv}>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232791097-df6a0d59-8157-49c6-94ad-cfbfe117f41f.png"
                alt="job"
              />
            </div>
            <div className={style.divDetails}>Job/Business Problems</div>
          </div>
          <div className={style.subDiv}>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232792675-fc9cf3fb-8b51-4c66-b8e1-d7774d08b8f4.png"
                alt="money"
              />
            </div>
            <div className={style.divDetails}>Money Problem</div>
          </div>
          <div className={style.subDiv}>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232793462-956734ec-01f1-4e83-94f3-f1e715bf6965.png"
                alt="education"
              />
            </div>
            <div className={style.divDetails}>Education Problems</div>
          </div>
        </div>
        <div className={style.chakraAnimation}>
          <div className={`${style.outerChakra} ${style.clockwiseSpin}`}>
            <img
              src="https://user-images.githubusercontent.com/99132893/232808909-7217f195-5c55-4907-a79c-9fd5c7fd1420.png"
              alt="chakra"
            />
          </div>
        </div>
        <div className={style.sideDiv}>
          <div className={style.subDiv}>
            <div className={style.leftDivDetails}>Health Problems</div>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232794360-05bff8be-23fe-48b0-85c0-2a4ebf13cd16.png"
                alt="health"
              />
            </div>
          </div>
          <div className={style.subDiv}>
            <div className={style.leftDivDetails}>Grah Shanti</div>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232796561-84cd84f2-b688-46c2-8395-0257ef747a9d.png"
                alt="grah"
              />
            </div>
          </div>
          <div className={style.subDiv}>
            <div className={style.leftDivDetails}>Child Birth Issues</div>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232797046-455f0328-39da-45a1-92d7-25a4262bf1af.png"
                alt="child"
              />
            </div>
          </div>
          <div className={style.subDiv}>
            <div className={style.leftDivDetails}>Husband Wife Problems</div>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232797653-9f353a8f-65e7-40a4-8169-64abbc5393ec.png"
                alt="husband-wife"
              />
            </div>
          </div>
          <div className={style.subDiv}>
            <div className={style.leftDivDetails}>Lucky Number / Color</div>
            <div className={style.divIcon}>
              <img
                src="https://user-images.githubusercontent.com/99132893/232798217-c61feb6d-a29a-4163-8987-2f72be903967.png"
                alt="numbers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chackra;
