import { FC, useState } from 'react';

const data = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
];

type Props = {
  openModalObj: [React.Dispatch<React.SetStateAction<boolean>>];
};

const Gallery: FC<Props> = ({ openModalObj: [setOpenModal] }) => {
  const [coverImage, setCoverImage] = useState<string>(data[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const ChangeImageIndex = (index: number) => {
    setCurrentIndex(index);
    setCoverImage(data[index]);
  };

  const NextImage = () => {
    if (currentIndex === data.length - 1) return;
    console.log('here');
    ChangeImageIndex(currentIndex + 1);
  };

  const PreviousImage = () => {
    if (currentIndex === 0) return;
    ChangeImageIndex(currentIndex - 1);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-900/90 dark:bg-gray-900/95 fixed inset-0 z-40">
          <div className="flex h-full justify-center items-center">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <a
                className="mt-16 text-white hover:text-gray-800 cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                ❮ Back
              </a>
              {/* <a
                className="absolute left-0 inset-y-0 flex items-center -mt-32 px-16 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
                onClick={() => PreviousImage()}
              >
                ❮
              </a>
              <a
                className="absolute right-0 inset-y-0 flex items-center -mt-32 px-16 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
                onClick={() => NextImage()}
              >
                ❯
              </a> */}
              <img
                src={coverImage}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4 mt-4"
                id="mainImage"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src={data[0]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImageIndex(0)}
                />
                <img
                  src={data[1]}
                  alt="Thumbnail 2"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImageIndex(1)}
                />
                <img
                  src={data[2]}
                  alt="Thumbnail 3"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImageIndex(2)}
                />
                <img
                  src={data[3]}
                  alt="Thumbnail 4"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImageIndex(3)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
