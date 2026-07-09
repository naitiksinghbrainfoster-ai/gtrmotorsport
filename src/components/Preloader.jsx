import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "/favicon.svg";

export default function Preloader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <>
      <style>{`
      .preloader{
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(8, 8, 8, 0.55);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 999999;
  animation: fadeOut .35s ease .75s forwards;
}

.preloader img{
  width:100px;
  max-width:35vw;
  user-select:none;
  -webkit-user-drag:none;

  filter:
    drop-shadow(0 0 20px rgba(255,255,255,.15))
    drop-shadow(0 0 35px rgba(255,0,0,.25));

  animation: logoZoom 1.9s ease-in-out forwards;
}

@keyframes logoZoom{
  0%{
    opacity:0;
    transform:scale(.5);
  }

  25%{
    opacity:1;
    transform:scale(1.15);
  }

  50%{
    transform:scale(.92);
  }

  75%{
    transform:scale(1.05);
  }

  100%{
    opacity:1;
    transform:scale(1);
  }
}
      `}</style>

      <div className="preloader">
        <img src={logo} alt="GTR Motorsport" />
      </div>
    </>
  );
}