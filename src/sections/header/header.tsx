import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { t } from "../../i18n/i18n";

// external components
import { IoLibrarySharp } from "react-icons/io5";
import { MdClose, MdMenu } from "react-icons/md";
import { Switch } from "@headlessui/react";

// utils
import { buttonsList } from "./utils";

// context
import { useLanguage } from "../../context/language-context";

function Header() {
  const { setLanguage } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleChange = (value: boolean) => {
    setEnabled(value);
    setLanguage(value ? "EN" : "ES");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar el Header al desplazarse hacia arriba, ocultarlo al desplazarse hacia abajo
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Ocultar Header
      } else {
        setIsVisible(true); // Mostrar Header
      }

      setLastScrollY(currentScrollY);
    };

    // Añadir el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      id="#header"
      className={twMerge(
        "w-full h-20 px-10 lg:px-32 py-6 bg-zinc-600 transition-transform duration-300 rounded-b-xl top-0 left-0 z-50 fixed",
        isVisible
          ? "transform translate-y-0 shadow-sm shadow-cyan-500"
          : "transform -translate-y-full"
      )}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <IoLibrarySharp
          className="w-6 h-6 text-cyan-500 hover:shadow-lg cursor-pointer hover:shadow-cyan-200"
          onClick={() => {
            const section = document.getElementById("#hero");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
            setOpen(!open);
          }}
        />
        <div className="hidden lg:flex flex-row gap-5 items-center">
          {buttonsList.map((item, index) => (
            <button
              key={`buttonlist-lg-${+index}`}
              type="button"
              className="text-slate-200 font-medium uppercase text-sm"
              onClick={() => {
                const section = document.getElementById(`${item.href}`);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                setOpen(!open);
              }}
            >
              {t(item.key)}
            </button>
          ))}
          <div className="flex flex-row gap-2 items-center border-l-2 pl-4 border-l-cyan-500">
            <img
              alt="ES"
              className="h-5 w-5 overflow-hidden rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt3Sl5fzm1cRfdoG-Pngt6ixByHUuA4kuFjRkL6z_mRhFY_zxV3-7ZU25U_qDRxkyhz0&usqp=CAU"
            />
            <Switch
              checked={enabled}
              onChange={handleChange}
              className={`group inline-flex h-6 w-11 items-center rounded-full transition ${
                enabled ? "bg-cyan-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`size-4 translate-x-1 rounded-full bg-white transition ${
                  enabled ? "translate-x-6" : ""
                }`}
              />
            </Switch>
            <img
              alt="EN"
              className="h-5 w-5 overflow-hidden rounded-full"
              src="https://img.freepik.com/foto-gratis/fondo-bandera-estados-unidos-america_23-2148157263.jpg?semt=ais_hybrid"
            />
          </div>
        </div>
        <MdMenu
          className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={twMerge(
          open ? "block" : "hidden",
          "lg:hidden w-screen h-screen bg-zinc-600 absolute top-0 left-0 bottom-0 right-0 p-10"
        )}
      >
        <div className="w-full flex flex-row justify-between items-center mb-10">
          <IoLibrarySharp
            className="w-6 h-6 text-cyan-500 hover:shadow-lg cursor-pointer hover:shadow-cyan-200"
            onClick={() => {
              const section = document.getElementById("#hero");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              setOpen(!open);
            }}
          />
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row gap-2 items-center border-r-2 pr-4 border-r-cyan-500">
              <img
                alt="ES"
                className="h-5 w-5 overflow-hidden rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt3Sl5fzm1cRfdoG-Pngt6ixByHUuA4kuFjRkL6z_mRhFY_zxV3-7ZU25U_qDRxkyhz0&usqp=CAU"
              />
              <Switch
                checked={enabled}
                onChange={handleChange}
                className={`group inline-flex h-6 w-11 items-center rounded-full transition ${
                  enabled ? "bg-cyan-500" : "bg-gray-200"
                }`}
              >
                <span
                  className={`size-4 translate-x-1 rounded-full bg-white transition ${
                    enabled ? "translate-x-6" : ""
                  }`}
                />
              </Switch>
              <img
                alt="EN"
                className="h-5 w-5 overflow-hidden rounded-full"
                src="https://img.freepik.com/foto-gratis/fondo-bandera-estados-unidos-america_23-2148157263.jpg?semt=ais_hybrid"
              />
            </div>
            <MdClose
              className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {buttonsList.map((item, index) => (
            <button
              key={`buttonlist-lg-${+index}`}
              type="button"
              className="text-slate-200 font-medium uppercase text-sm border-b-[1px] border-b-cyan-500 pb-2"
              onClick={() => {
                const section = document.getElementById(`${item.href}`);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                setOpen(!open);
              }}
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
