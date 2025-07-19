import zap from '../../assets/zap.svg';
import terminal from '../../assets/terminal.svg';
import copy from '../../assets/copy.svg';
import doubleCheck from '../../assets/doubleCheck.svg';
import { useState } from 'react';

type LegendColors =
  | 'bg-green-400'
  | 'bg-blue-400'
  | 'bg-purple-400'
  | 'bg-orange-400';

interface ILegendItem {
  title: string;
  bgColor: LegendColors;
}

const Hero = () => {
  const mainCommand: string = 'npx rtg-react';
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const lengendMap: ILegendItem[] = [
    { title: 'TypeScript Ready', bgColor: 'bg-green-400' },
    { title: 'Tailwind CSS', bgColor: 'bg-blue-400' },
    { title: 'Multiple Frameworks', bgColor: 'bg-purple-400' },
    { title: 'Production Ready', bgColor: 'bg-orange-400' },
  ];

  return (
    <div
      className="h-screen w-full flex flex-col justify-center gap-8"
      style={{
        backgroundColor: '#f8f8f9',
        backgroundImage: `
    linear-gradient(#f2f2f7 2px, transparent 2px),
    linear-gradient(to right, #f2f2f7 2px, #f8f8f9 2px)
    `,
        backgroundSize: '36px 36px',
      }}
    >
      <div className="flex items-center justify-between w-fit gap-2 bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full mx-auto capitalize text-white font-medium">
        <img src={zap} alt="zap" className="h-4 w-4" />
        <div>ready to go production templates</div>
      </div>
      <div className="text-center capitalize font-bold text-5xl w-2xl mx-auto bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
        generate production ready apps instantly
      </div>
      <div className="text-center text-xl text-gray-600 w-2xl mx-auto">
        Skip the setup, start coding. Generate production-ready React
        applications with your favorite tools in seconds.
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 w-xl mx-auto rounded-2xl text-green-400 px-4 py-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={terminal} alt="terminal icon" className="h-4 w-4" />
            <div>Terminal</div>
          </div>
          <div className="bg-gray-700 rounded-xl h-16 flex items-center justify-between px-4">
            <div className="text-center w-full text-lg">{mainCommand}</div>
            <button
              className="hover:bg-gray-400 p-2 rounded-xl transition-all ease-in-out duration-300 cursor-pointer"
              onClick={() => setIsCopied(prev => !prev)}
            >
              <img
                src={isCopied ? doubleCheck : copy}
                alt="copy icon"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4 w-2xl mx-auto">
          {lengendMap.map((el, idx) => {
            return (
              <div key={idx} className="flex items-center gap-2">
                <div className={`${el.bgColor} rounded-full h-1.5 w-1.5`}></div>
                <div className="text-xs">{el?.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
