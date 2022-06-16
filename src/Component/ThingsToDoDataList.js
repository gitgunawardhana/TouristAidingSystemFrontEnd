import Galle from "../Assets/ThingsToDo/Galle.png";
import Jaffna from "../Assets/ThingsToDo/Jaffna.png";
import Kandy from "../Assets/ThingsToDo/Kandy.png";
import Mirissa from "../Assets/ThingsToDo/Mirissa.png";

const DataList = [
  {
    id: 1,
    src: Kandy,
    title: "Kandy",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 2,
    src: Mirissa,
    title: "Mirissa",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 3,
    src: Galle,
    title: "Galle",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 4,
    src: Jaffna,
    title: "Jaffna",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 5,
    src: Kandy,
    title: "Kandy",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 6,
    src: Mirissa,
    title: "Mirissa",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 7,
    src: Galle,
    title: "Galle",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 8,
    src: Jaffna,
    title: "Jaffna",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 9,
    src: Kandy,
    title: "Kandy",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 10,
    src: Mirissa,
    title: "Mirissa",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 11,
    src: Galle,
    title: "Galle",
    description:
      "With supporting text below as a natural lead-in to additional content.",
  },
];

function chunkArray(arr, val) {
  var finalArr = [];

  for (var i = 0; i < arr.length; i += val) {
    finalArr.push(arr.slice(i, val + i));
  }

  return finalArr;
}

const CarouselDataList = chunkArray(DataList, 3);

export default DataList;
