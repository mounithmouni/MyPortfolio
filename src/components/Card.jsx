export default function Card(props) {
  const { cardList } = props;
  return (
    <>
      <div className="w-lg h-lg my-auto ml-40 p-10 text-center bg-white border border-gray-200 rounded-2xl shadow-lg">
        <a href="#">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-orange-400">
            {cardList.name}
          </h5>
        </a>
        <p className="mb-4 font-normal text-gray-700 text-xl">
          {cardList.clgName}
        </p>
        <p className="mb-4 font-normal text-gray-700 text-xl">{cardList.yop}</p>
        <p className="mb-4 font-normal text-gray-700 text-xl">
          {cardList.stream}
        </p>
      </div>
    </>
  );
}
