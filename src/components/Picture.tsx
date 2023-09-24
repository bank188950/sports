/* eslint-disable @next/next/no-img-element */

interface sourceValue {
  type: string;
  media: string;
  path: string;
}

interface pictureValue {
  isLoaded: true | false;
  src: string;
  sourceSet: sourceValue[][];
  classList?: string;
  name?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function Picture(props: pictureValue) {
  const { isLoaded, src, sourceSet, classList, name, alt, width, height } = props;

  return (
    <>
      <picture className={`${classList}`}>
        {sourceSet.map((sourceList, index) =>
          sourceList.map((list: sourceValue) => (
            <source
              key={`${name}-${index++}`}
              media={sourceList[0].media}
              srcSet={isLoaded ? `${list.path}.${list.type}` : 'data:,CYII=='}
              type={`image/${list.type === 'jpg' ? 'jpeg' : list.type}`}
            />
          ))
        )}

        <img
          src={isLoaded ? src : 'data:,CYII=='}
          alt={alt}
          className={isLoaded ? '-show' : ''}
          width={width}
          height={height}
        />
      </picture>
    </>
  );
}
