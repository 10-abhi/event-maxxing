export default function InputBox({
    inputType,
    labelText,
    stateValue,
    setStateValue,
    placeholderText = " "
}) {
    return (
        <div className="flex flex-col">
            <label className="mb-2">{labelText}</label>
            <input
                type={inputType}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                className="p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder={placeholderText}
            />
        </div>
    );
}
