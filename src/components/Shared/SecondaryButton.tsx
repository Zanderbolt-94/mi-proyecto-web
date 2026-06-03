interface props {
  text: string;
  styles?: string;
}

function SecondaryButton({ text, styles = "" }: props) {
  return (
    <div>
      <button
        className={`bg-transparent px-2.5 py-1 rounded-md text-white border border-gray-700 ${styles}`}
      >
        {text}
      </button>
    </div>
  );
}

export default SecondaryButton;
