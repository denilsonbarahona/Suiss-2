import GeographicImpactIcon from "../assets/icons/GeographicImpact.svg";

export default function GeographicIcon({ props, color = "#575757" }: any) {
  return (
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0.666687 9.00001C0.666687 7.84723 0.885437 6.76389 1.32294 5.75001C1.76044 4.73612 2.35419 3.85417 3.10419 3.10417C3.85419 2.35417 4.73613 1.76042 5.75002 1.32292C6.76391 0.885422 7.84724 0.666672 9.00002 0.666672C10.7639 0.666672 12.3368 1.15278 13.7188 2.12501C15.1007 3.09723 16.1042 4.35417 16.7292 5.89584C16.8264 6.13195 16.8299 6.36806 16.7396 6.60417C16.6493 6.84028 16.4861 7.00001 16.25 7.08334C16.0278 7.15278 15.816 7.13195 15.6146 7.02084C15.4132 6.90973 15.2709 6.74306 15.1875 6.52084C14.8542 5.68751 14.375 4.95139 13.75 4.31251C13.125 3.67362 12.375 3.18056 11.5 2.83334V3.16667C11.5 3.62501 11.3368 4.01737 11.0104 4.34376C10.684 4.67014 10.2917 4.83334 9.83335 4.83334H8.16669V6.50001C8.16669 6.73612 8.08683 6.93403 7.9271 7.09376C7.76738 7.25348 7.56947 7.33334 7.33335 7.33334H5.66669V9.00001H6.50002C6.73613 9.00001 6.93405 9.07987 7.09377 9.23959C7.25349 9.39931 7.33335 9.59723 7.33335 9.83334V11.5H6.50002L2.50002 7.50001C2.45835 7.75001 2.42016 8.00001 2.38544 8.25001C2.35072 8.50001 2.33335 8.75001 2.33335 9.00001C2.33335 10.6944 2.89238 12.1736 4.01044 13.4375C5.12849 14.7014 6.53474 15.4306 8.22919 15.625C8.45141 15.6528 8.63544 15.7465 8.78127 15.9063C8.9271 16.066 9.00002 16.2639 9.00002 16.5C9.00002 16.7361 8.92016 16.934 8.76044 17.0938C8.60072 17.2535 8.40974 17.3195 8.18752 17.2917C6.06252 17.0833 4.2778 16.1945 2.83335 14.625C1.38891 13.0556 0.666687 11.1806 0.666687 9.00001ZM16 16.3333L13.9167 14.25C13.625 14.4167 13.3125 14.5556 12.9792 14.6667C12.6459 14.7778 12.2917 14.8333 11.9167 14.8333C10.875 14.8333 9.9896 14.4688 9.26044 13.7396C8.53127 13.0104 8.16669 12.125 8.16669 11.0833C8.16669 10.0417 8.53127 9.15626 9.26044 8.42709C9.9896 7.69792 10.875 7.33334 11.9167 7.33334C12.9584 7.33334 13.8438 7.69792 14.5729 8.42709C15.3021 9.15626 15.6667 10.0417 15.6667 11.0833C15.6667 11.4583 15.6111 11.8125 15.5 12.1458C15.3889 12.4792 15.25 12.7917 15.0834 13.0833L17.1667 15.1667C17.3195 15.3195 17.3959 15.5139 17.3959 15.75C17.3959 15.9861 17.3195 16.1806 17.1667 16.3333C17.0139 16.4861 16.8195 16.5625 16.5834 16.5625C16.3472 16.5625 16.1528 16.4861 16 16.3333ZM11.9167 13.1667C12.5 13.1667 12.9931 12.9653 13.3959 12.5625C13.7986 12.1597 14 11.6667 14 11.0833C14 10.5 13.7986 10.0069 13.3959 9.60417C12.9931 9.20139 12.5 9.00001 11.9167 9.00001C11.3334 9.00001 10.8403 9.20139 10.4375 9.60417C10.0347 10.0069 9.83335 10.5 9.83335 11.0833C9.83335 11.6667 10.0347 12.1597 10.4375 12.5625C10.8403 12.9653 11.3334 13.1667 11.9167 13.1667Z"
          fill={color}
        />
      </svg>
  );
}