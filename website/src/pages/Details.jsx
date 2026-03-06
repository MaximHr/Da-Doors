import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoorDetails } from "../api";

const Details = () => {
  const [door, setDoor] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const { slug } = useParams();

  const loadDoor = async (slug) => {
    const data = await getDoorDetails(slug);
    setDoor(data);
    setSelectedImage(data.titleImage);
    console.log(data);
  };

  useEffect(() => {
    if (slug) {
      loadDoor(slug);
    }
  }, [slug]);

  return (
    <div className="min-h-[80vh]">
      {door && (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-8 pt-4 mb-16 gap-8 lg:gap-16">
          <div className="flex flex-col order-2 lg:order-1">
            <div className="rounded-[5px] flex items-center justify-center p-8 md:h-[90vh] bg-[#f4f3f8]">
              <img
                className="h-full object-contain"
                src={import.meta.env.VITE_R2_URL + "/image/" + selectedImage}
                alt={door.title}
              />
            </div>
            {door.images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                <div
                  key={door.titleImage}
                  className={`${selectedImage == door.titleImage ? "border-[#f6b142]" : "border-transparent"} border-[3px] cursor-pointer p-4 h-[180px] rounded-[5px] flex items-center justify-center bg-[#f4f3f8]`}
                  onClick={() => setSelectedImage(door.titleImage)}
                >
                  <img
                    className="h-full"
                    src={
                      import.meta.env.VITE_R2_URL + "/image/" + door.titleImage
                    }
                    alt={door.title}
                  />
                </div>
                {door.images.map((image) => {
                  return (
                    <div
                      key={image}
                          className={`${selectedImage == image ? "border-[#f6b142]" : "border-transparent"} border-[3px] cursor-pointer p-4 h-[180px] rounded-[5px] flex items-center justify-center bg-[#f4f3f8]`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        className="h-full"
                        src={import.meta.env.VITE_R2_URL + "/image/" + image}
                        alt={image}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex flex-col order-1 lg:order-2">
            <h2 className="font-black mb-4 font-display text-3xl md:text-4xl leading-none whitespace-pre-line">
              {door.title}
            </h2>
            <div className="flex flex-col gap-1">
              {door.description && (
                <p className="text-[16px] md:text-[18px] mb-3">
                  {door.description}
                </p>
              )}
              {door.series && (
                <p className="text-[16px] md:text-[18px]">
                  Серия: {door.series}
                </p>
              )}
              {door.model && (
                <p className="text-[16px] md:text-[18px]">
                  Модел: {door.series}
                </p>
              )}
              {door.construction && (
                <p className="text-[16px] md:text-[18px]">
                  Конструкция: {door.construction}
                </p>
              )}
              {door.thickness != null && door.thickness > 0 && (
                <p className="text-[16px] md:text-[18px]">
                  Дебелина на кирлото: {door.thickness} мм
                </p>
              )}
              {door.model && (
                <p className="text-[16px] md:text-[18px]">
                  Вътрешна структура: {door.model}
                </p>
              )}
              {door.core && (
                <p className="text-[16px] md:text-[18px]">
                  Пълнеж: {door.core}
                </p>
              )}
              {door.frame && (
                <p className="text-[16px] md:text-[18px]">Каса: {door.frame}</p>
              )}
              {door.lockingMechanism && (
                <p>Тип заключване: {door.lockingMechanism}</p>
              )}
              {door.primaryLock && (
                <p className="text-[16px] md:text-[18px]">
                  Основна брава: {door.primaryLock}
                </p>
              )}
              {door.finish && (
                <p className="text-[16px] md:text-[18px]">
                  Покритие: {door.finish}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
