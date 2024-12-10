import { ArrowRight } from "lucide-react";
import useNameStep from "../../hooks/useNameStep";
import ButtonWithIcon from "../buttons/ButtonWithIcon";

const NameStep = () => {
  const { nameRef, handleChange, handleKeyDown, isDisabled, handleNext } =
    useNameStep();
  return (
    <div className="w-full h-full p-8 flex flex-col items-center gap-2 bg-white rounded-xl shadow-xl fade-in delay-200ms">
      <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md text-3xl shadow-inner-custom fade-in delay-500ms">
        🪴
      </div>
      <h1 className="text-2xl font-medium text-center fade-in delay-1000ms">
        Let’s customize your experience
      </h1>
      <p className="text-center text-sm text-gray-500 fade-in delay-1000ms">
        Please enter your name ✏️
      </p>
      <h1
        ref={nameRef}
        className="w-56 text-2xl font-bold text-center focus:outline-none focus:ring-0 bg-transparent placeholder_name fade-in delay-1500ms"
        role="textbox"
        aria-label="Name input field"
        contentEditable
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      ></h1>
      <div className="mt-5 fade-in delay-1500ms">
        <ButtonWithIcon
          isDisabled={isDisabled}
          variant="shadow"
          color="primary"
          size="lg"
          ariaLabel="Next step"
          onPress={handleNext}
        >
          <ArrowRight strokeWidth={3} />
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default NameStep;
