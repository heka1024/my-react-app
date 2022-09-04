import { EyeIcon, ArrowRightIcon, ChatBubbleLeftIcon as ChatIcon } from "@heroicons/react/24/outline";

interface Props {
  imageUrl: string;
  description: string;
  title: string;
}

const truncatedDescription = (description: string) => {
  const shouldTruncate = description.length > 100

  if (!shouldTruncate) {
    return description
  }

  return description.substring(0, 100) + "..."
}

const Card = ({title, description, imageUrl}: Props) => {
  return (
    <div className={"p-4 sm:w-1/2 lg:w-1/3"}>
      <div className={"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"}>
        <img
          className={"lg:h-72 md:h-48 w-full object-cover object-center"}
          src={imageUrl}
          alt={"card image"}
        />
        <div className={"p-6 hover:bg-indigo-600 hover:text-white transition duration-150 ease-in cursor-pointer"}>
          <h2 className={"text-base font-medium text-indigo-300 mb-1 "}>
            { title || "타이틀" }
          </h2>
          <p className={"leading-relaxed mb-3"}>
            {truncatedDescription(description)}
          </p>

          <div className={"flex items-center flex-wrap"}>
            <a href={"#"}
               className={"text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"}>
              Read More
              <ArrowRightIcon className={"w-4 h-4 mr-1"}/>
            </a>

            <span className={"text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"}>
              <EyeIcon className={"w-4 h-4 mr-1"}/>
              1.2K
            </span>
            <span className={"text-gray-400 inline-flex items-center leading-none text-sm"}>
              <ChatIcon className={"w-4 h-4 mr-1"}/>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card