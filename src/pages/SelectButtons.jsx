import { useState } from 'react';
import Button from '../components/Button';

const SelectButtons = () => {
    const [activeButtonName, setClick] = useState(null);

    return (
        <div className="selectBtns">
            {['Primary', 'Secondary', 'Default'].map((btnName) => {
                const handleButtonClick = () => {
                    setClick(btnName);
                };

                return (
                    <Button
                        key={btnName}
                        btnName={btnName}
                        onClick={handleButtonClick}
                        style={activeButtonName === btnName}
                    ></Button>
                );
            })}
        </div>
    );
};

export default SelectButtons;
