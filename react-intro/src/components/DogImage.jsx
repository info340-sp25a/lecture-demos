export function PuppyImage(props) {

  const {isGrown, caption} = props;
  // const isGrown = props.isGrown;
  // const caption = props.caption;

  console.log(props);


  let puppyImgPath = "/img/puppy.jpg"
  if(isGrown) {
    puppyImgPath = "/img/husky.jpg";
  }

  return (
    <div>
      <img className="rounded" src={puppyImgPath} alt={caption} />
      <p>{caption}</p>
    </div>
  )

}