interface Props {
  title: string;
  text: string;
  imageURL: string;
}
function Service({ title, text, imageURL }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 mb-12">
      <img src={imageURL} alt={imageURL} />
      <p className="text-3xl">{title}</p>
      <p className="text-center p-5">{text}</p>
    </div>
  );
}

export default Service;
