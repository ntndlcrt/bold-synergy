export default function SVG({ name }) {
  switch (name) {
    case 'arrow-right':
      return (
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5H10.0002M7.00024 9L11.0002 5L7.00024 1"
            stroke="#FF5826"
            stroke-width="1.5"
            stroke-linecap="square"
          />
        </svg>
      )
    case 'logo-icon':
      return (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.85658V7.04614C0 6.81983 0.156754 6.69081 0.344254 6.69081H5.16683C5.8871 6.69081 6.35685 6.20595 6.35685 5.46253V0.355324C6.35685 0.161795 6.48236 0 6.66986 0H8.42389C8.64314 0 8.76815 0.161795 8.76815 0.355324V4.84812C8.76815 5.1072 8.70564 5.26848 8.54889 5.43027L5.13558 8.95282C4.94758 9.14687 4.82258 9.2119 4.57157 9.2119H0.344254C0.156754 9.2119 0 9.05011 0 8.85658ZM15 8.85658C15 9.08288 14.8437 9.2119 14.6557 9.2119H9.83317C9.1129 9.2119 8.64314 9.69624 8.64314 10.4402V15.6442C8.64314 15.8377 8.51814 15.9995 8.29889 15.9995H6.54536C6.35736 15.9995 6.23236 15.8377 6.23236 15.6442V11.0541C6.23236 10.7955 6.29486 10.666 6.45161 10.4724L9.86492 6.98163C10.0212 6.7881 10.1779 6.72307 10.3972 6.72307H14.6557C14.8437 6.72307 15 6.85209 15 7.07839V8.85658Z"
            fill="#FF5826"
          />
        </svg>
      )
    default:
      return null
  }
}
