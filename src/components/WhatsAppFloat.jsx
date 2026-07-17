import whatsappIcon from "../assets/whatsappicon.svg";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        .whatsapp-btn{
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          animation: whatsappIn .8s ease-out forwards,
                     whatsappFloat 3s ease-in-out infinite 1s;
        }

        .whatsapp-btn img{
          width: 64px;
          height: 64px;
          cursor: pointer;
          transition: transform .3s ease;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,.25));
        }

        .whatsapp-btn:hover img{
          transform: scale(1.12);
        }

        @keyframes whatsappIn{
          0%{
            opacity:0;
            transform:translateY(80px) scale(.6);
          }
          60%{
            opacity:1;
            transform:translateY(-10px) scale(1.08);
          }
          80%{
            transform:translateY(4px) scale(.98);
          }
          100%{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @keyframes whatsappFloat{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        @media (max-width:768px){
          .whatsapp-btn{
            bottom:20px;
            right:20px;
          }

          .whatsapp-btn img{
            width:56px;
            height:56px;
          }
        }
      `}</style>

      <a
        href="https://wa.me/+19253366470"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </>
  );
}