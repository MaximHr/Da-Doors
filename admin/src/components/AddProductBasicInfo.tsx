import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Editor, {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnBulletList,
  BtnNumberedList,
  Toolbar,
} from "react-simple-wysiwyg";
import { Trash } from "lucide-react";
import ImageUploadButton from "@/components/ImageUploadButton";
import { deleteImage } from "@/api/images";
import type { ChangeEvent } from "react";
import type {
  ProductFormCommonAttributes,
  ProductFormStateSetters,
} from "@/types/product";

const AddProductBasicInfo = ({
  values,
  setters,
}: {
  values: ProductFormCommonAttributes;
  setters: ProductFormStateSetters;
}) => {
  const removeTitleImage = async () => {
    try {
      setters.setTitleImage("");
      await deleteImage(values.titleImage);
    } catch (err) {
      console.log(err);
    }
  };

  const removeImage = async (img: string) => {
    try {
      const updatedImages = values.images.filter((image) => image != img);
      setters.setImages([...updatedImages]);

      await deleteImage(img);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grd-cols-1 md:grid-cols-2 gap-6 max-w-lg">
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="name">Име (Задължително)</Label>
          <Input
            id="name"
            type="text"
            required
            value={values.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setTitle(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="series">Серия </Label>
          <Input
            id="series"
            value={values.series}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setSeries(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="model">Модел </Label>
          <Input
            id="model"
            value={values.model}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setModel(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="model">Цена </Label>
          <Input
						type="number"
            id="model"
            value={values.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setPrice(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="construction">Конструкция </Label>
          <Input
            id="construction"
            value={values.construction}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setConstruction(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="thickness">Дебелина на крилото в мм. </Label>
          <Input
            id="thickness"
						min={0}
						type="number"
            value={values.thickness}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setThickness(Number(e.target.value))
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="innerStructure">Вътрешна структура </Label>
          <Input
            id="innerStructure"
            value={values.innerStructure}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setInnerStructure(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="core">Пълнеж </Label>
          <Input
            id="core"
            value={values.core}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setCore(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="frame">Каса </Label>
          <Input
            id="frame"
            value={values.frame}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setFrame(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="lockingMechanism">Тип заключване </Label>
          <Input
            id="lockingMechanism"
            value={values.lockingMechanism}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setLockingMechanism(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="primaryLock">Основна брава </Label>
          <Input
            id="primaryLock"
            value={values.primaryLock}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setPrimaryLock(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="finish">Покритие </Label>
          <Input
            id="finish"
            value={values.finish}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setters.setFinish(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox
          checked={values.isOnMainPage}
          onCheckedChange={(value) => setters.setIsOnMainPage(!!value)}
        />
        <Label htmlFor="checkbox">Покажи ме на началната страница</Label>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="image-btn">Качи основна снимка (Задължително)</Label>
        <ImageUploadButton
          images={values.titleImage}
          className="max-w-lg h-[125px]"
          multiple={false}
          setImagesUrl={setters.setTitleImage}
        />
        {values.titleImage.trim().length != 0 && (
          <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 gap-2 ">
            <div
              key={values.titleImage}
              className="border relative aspect-square overflow-hidden"
            >
              <img
                className="p-2 w-full h-full object-contain"
                src={`${import.meta.env.VITE_R2_URL}/image/${values.titleImage}`}
                alt="product image"
              />
              <div
                className="absolute top-1 right-1 cursor-pointer p-1 hover:text-destructive bg-white/75 transition-colors duration-75 rounded"
                onClick={removeTitleImage}
              >
                <Trash size={14} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="image-btn">Качи допълнителни снимки </Label>
        <ImageUploadButton
          images={values.images}
          className="max-w-lg h-[125px]"
          multiple={true}
          setImagesUrl={setters.setImages}
        />
        {values.images.length != 0 && (
          <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 gap-2 ">
            {values.images.map((img) => (
              <div
                key={img}
                className="border relative aspect-square overflow-hidden"
              >
                <img
                  className="p-2 w-full h-full object-contain"
                  src={`${import.meta.env.VITE_R2_URL}/image/${img}`}
                  alt="product image"
                />
                <div
                  className="absolute top-1 right-1 cursor-pointer p-1 hover:text-destructive bg-white/75 transition-colors duration-75 rounded"
                  onClick={() => removeImage(img)}
                >
                  <Trash size={14} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="description">Описание</Label>
        <Editor
          value={values.description}
          onChange={(e) => setters.setDescription(e.target.value)}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnBulletList />
            <BtnNumberedList />
          </Toolbar>
        </Editor>
      </div>
    </form>
  );
};

export default AddProductBasicInfo;
