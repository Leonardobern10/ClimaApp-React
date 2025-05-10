export default function liveClock(
     setData: React.Dispatch<React.SetStateAction<Date>>
) {
     return setInterval(() => {
          setData(new Date());
     }, 1000);
}
