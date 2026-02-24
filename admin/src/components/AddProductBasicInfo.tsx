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
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

const AddProductBasicInfo = ({
  name,
  description,
  price,
  setName,
  setDescription,
  images,
  setPrice,
  setImages,
  titleImage,
  setTitleImage,
  isOnMainPage,
  setIsOnMainPage,
}: {
  name: string;
  images: string[];
  discount: number | "";
  description: string;
  quantity: number | "";
  price: number | undefined;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setQuantity: Dispatch<SetStateAction<number | "">>;
  setPrice: Dispatch<SetStateAction<number | undefined>>;
  setDiscount: Dispatch<SetStateAction<number | "">>;
  setImages: Dispatch<SetStateAction<string[]>>;
  titleImage: string;
  setTitleImage: Dispatch<SetStateAction<string>>;
  setIsOnMainPage: Dispatch<SetStateAction<boolean>>;
  isOnMainPage: boolean;
}) => {
  const removeTitleImage = async () => {
    try {
      setTitleImage("");
      await deleteImage(titleImage);
    } catch (err) {
      console.log(err);
    }
  };

  const removeImage = async (img: string) => {
    try {
      const updatedImages = images.filter((image) => image != img);
      setImages([...updatedImages]);
      await deleteImage(img);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex-col lg:flex-row flex gap-6 max-w-lg">
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="name">Име</Label>
          <Input
            id="name"
            type="text"
            placeholder="Метална врата"
            required
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className="grid gap-3 flex-1/2">
          <Label htmlFor="price">Цена (€) (опционално)</Label>
          <Input
            id="price"
            min={0}
            type="number"
            value={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(Number(e.target.value))
            }
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox
          checked={isOnMainPage}
          onCheckedChange={(value) => setIsOnMainPage(!!value)}
        />
        <Label htmlFor="checkbox">Покажи ме на началната страница</Label>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="image-btn">Качи основна снимка</Label>
        <ImageUploadButton
          images={titleImage}
          className="max-w-lg h-[125px]"
          multiple={false}
          setImagesUrl={setTitleImage}
        />
        {titleImage.trim().length != 0 && (
          <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 gap-2 ">
            <div
              key={titleImage}
              className="border relative aspect-square overflow-hidden"
            >
              <img
                className="p-2 w-full h-full object-contain"
                src={`${import.meta.env.VITE_R2_URL}/image/${titleImage}`}
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
        <Label htmlFor="image-btn">Качи допълнителни снимки (Опционално)</Label>
        <ImageUploadButton
          images={images}
          className="max-w-lg h-[125px]"
          multiple={true}
          setImagesUrl={setImages}
        />
        {images.length != 0 && (
          <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 gap-2 ">
            {images.map((img) => (
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
