import Image from 'next/image';

function PicsumImage() {
  return (
    <div>
      <img
        src="https://picsum.photos/200"
        alt="Picsum Image"
        width={200}
        height={200}
      />
    </div>
  );
}

export default PicsumImage;
