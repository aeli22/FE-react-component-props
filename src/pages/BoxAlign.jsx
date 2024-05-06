import Box from '../components/Box/Box';
import Circle from '../components/Circle/Circle';

const BoxAlign = () => {
    const circleColorArr = ['pink', 'red', 'black', 'gray', 'green', 'blue', 'orange'];

    return (
        <div>
            <Box boxColor="red" text="text1" />
            <Box boxColor="blue" text="text2" />
            <Box boxColor="green" text="text3" />
            <Box boxColor="pink" text="text4" />
            <div className="container">
                {circleColorArr.map((item) => (
                    <Box boxColor={item} />
                ))}
            </div>
        </div>
    );
};

export default BoxAlign;

//1번째 박스: red, 2번째 박스: blue, 3번째 박스: green, 4번째 박스: pink
