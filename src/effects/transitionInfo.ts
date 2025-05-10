export default function startInfoTransitionInterval(
     setVisible: React.Dispatch<React.SetStateAction<boolean>>,
     setShowTemp: React.Dispatch<React.SetStateAction<boolean>>
) {
     const interval = setInterval(() => {
          // Primeiro some
          setVisible(false);

          // Depois de 1s (duração da animação), troca o conteúdo e volta a aparecer
          setTimeout(() => {
               setShowTemp((prev: boolean) => !prev);
               setVisible(true);
          }, 1000);
     }, 5000);
     return interval;
}
