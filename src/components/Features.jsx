


const Features = ({ title, subtitle, text, subtext, flexStyle, imgUrl, index }) => (
  // TODO: KEY PROPS TO CHECK
  <div className={`${flexStyle} text-black items-center mt-[30px]`} key={index}>
    <div className="w-[50px] min-w-[50px] h-[50px] mr-[30px] backdrop-blur-xl bg-[#ff9100] rounded-[24px] justify-center flex items-center">

      {imgUrl ? (
        <img src={imgUrl} alt={imgUrl + index} style={{height: 20, width: 20 }}/>
      ) : (
        <div style={{color: "white", fontSize: "19px", fontWeight: "bold"}}>{index + 1}</div>
      )}
    </div>
    <div style={{flexDirection: "column"}}>

    {text && <p className="font-extrabold leading-8 my-1">{text}</p>}
    {subtitle ? (
      <p className="sm:max-w-[300px] w-full">{subtitle}</p>
    ) : (
      <p className="sm:max-w-[300px] break-words w-full">{subtext}</p>
    )}
    </div>
  </div>
);
export default Features;
