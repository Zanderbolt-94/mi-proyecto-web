interface props {
  text: string;
  styles?: string;
}

function PrimaryButton({ text, styles = "" }: props) {
  return (
    <div>
      <button
        className={`bg-LigthBlueButton px-2.5 py-1 rounded-md text-white ${styles}`}
      >
        {text}
      </button>
    </div>
  );
}

export default PrimaryButton;
