export default function HomeIcon({ props, color = "#575757" }: any) {
  return (
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1.99998 13.8333H4.49998V9.66666C4.49998 9.43054 4.57984 9.23263 4.73956 9.07291C4.89928 8.91318 5.0972 8.83332 5.33331 8.83332H8.66665C8.90276 8.83332 9.10067 8.91318 9.2604 9.07291C9.42012 9.23263 9.49998 9.43054 9.49998 9.66666V13.8333H12V6.33332L6.99998 2.58332L1.99998 6.33332V13.8333ZM0.333313 13.8333V6.33332C0.333313 6.06943 0.392341 5.81943 0.510396 5.58332C0.628452 5.34721 0.791646 5.15277 0.99998 4.99999L5.99998 1.24999C6.29165 1.02777 6.62498 0.916656 6.99998 0.916656C7.37498 0.916656 7.70831 1.02777 7.99998 1.24999L13 4.99999C13.2083 5.15277 13.3715 5.34721 13.4896 5.58332C13.6076 5.81943 13.6666 6.06943 13.6666 6.33332V13.8333C13.6666 14.2917 13.5035 14.684 13.1771 15.0104C12.8507 15.3368 12.4583 15.5 12 15.5H8.66665C8.43053 15.5 8.23262 15.4201 8.0729 15.2604C7.91317 15.1007 7.83331 14.9028 7.83331 14.6667V10.5H6.16665V14.6667C6.16665 14.9028 6.08678 15.1007 5.92706 15.2604C5.76734 15.4201 5.56942 15.5 5.33331 15.5H1.99998C1.54165 15.5 1.14929 15.3368 0.822896 15.0104C0.496507 14.684 0.333313 14.2917 0.333313 13.8333Z"
          fill={color}
        />
      </svg>
  );
}
