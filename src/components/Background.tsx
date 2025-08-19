import Image from 'next/image'
import background from '../../public/beer.png'
 
export default function Background() {
  return (
    <Image
      alt=""
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}