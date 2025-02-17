import ReactIcon from "assets/icons/react.svg";
import ViteIcon from "assets/icons/vite.svg";
import LogoImage from "assets/images/logo200.png";
import { GetEnv } from "utils/index";
import { version } from "../../package.json";

const AfterInstallation = () => {
  return (
    <div className="w-full bg-linear-to-l from-[#fff] to-[#fff] p-1.5">
      <div className="relative p-8">
        <div className="mb-4 flex flex-col justify-between sm:flex-row">
          <div className="text-h3 bg-linear-to-l from-[#9E7A68] to-[#9E7A68] bg-clip-text font-bold text-transparent">
            After Installation
          </div>
          <div className="text-small flex flex-col items-end gap-2.5">
            <div className="text-neutral flex gap-1 rounded-full bg-linear-to-r from-[#9E7A68] to-[#9E7A68] px-4 py-0.5">
              <img src={ViteIcon} width="16px" alt="vite-icon" />
              <img src={ReactIcon} width="16px" alt="react-icon" />
              <strong className="text-white">Template v{version}</strong>
            </div>
            <sup className="flex items-center gap-2 text-right font-bold">
              <a
                href="https://www.pantone.com/color-of-the-year/2025"
                target="_blank"
                className="flex items-center gap-1"
              >
                <div className="h-2 w-2 bg-[#9E7A68]" />
                Pantone Color of the Year 2025 - Mocca Mousse
              </a>
            </sup>
          </div>
        </div>
        <div className="mx-auto mb-4 w-full max-w-xs rounded-xl bg-linear-to-r from-[#9E7A68]/50 to-[#9E7A68] p-1.5 text-center shadow-lg">
          <div className="flex flex-col items-center">
            <img src={LogoImage} alt="logo" className="w-[30vw] max-w-40" />
            <div className="bg-neutral w-full rounded-lg p-1">
              <div>This is the way -- Mandalorian</div>
              <marquee>
                <strong>Mode: </strong>
                {GetEnv("MODE")}
              </marquee>
            </div>
          </div>
        </div>
        <div className="py-4">
          <strong>
            You have to edit text by name below this{" "}
            <span className="text-[#9E7A68]">
              (Spoiled Alert!, use "Find All and Replace")
            </span>
          </strong>
          <ul className="list-[upper-roman] pl-8">
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_PROJECT_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_GROUP_NAME</li>
            <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
          </ul>
        </div>
        <div className="text-small leading-tight text-[#9E7A68]">
          Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like
          "sub.host.com:9000" or "172.1.2.3:9000"
        </div>
        <sup className="opacity-10">
          จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
        </sup>
      </div>
    </div>
  );
};

export default AfterInstallation;
