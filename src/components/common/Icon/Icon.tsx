import React, { FC } from 'react';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'add': {
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
        </svg>
      );
    }
    case 'logo': {
      return (
        <svg
          className={className}
          viewBox="0 0 125 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M35.1277 3.83764L30.0357 29.6679H23.2832L25.9399 16.0517L17.3425 27.1218H14.1323L9.4461 16.0517L6.71559 29.6679H0L5.16584 3.83764H11.1065L17.158 18.7823L28.8918 3.83764H35.1277Z" />
          <path d="M59.8906 9.6679L55.9055 29.6679H49.2637L49.6696 27.6015C48.8086 28.4133 47.8369 29.016 46.7546 29.4096C45.6968 29.8032 44.6021 30 43.4706 30C41.2812 30 39.5347 29.4096 38.2309 28.2288C36.9518 27.048 36.3122 25.3629 36.3122 23.1734C36.3122 22.3616 36.3983 21.5375 36.5705 20.7011L38.7844 9.6679H45.7952L43.7289 20.0369C43.6305 20.5043 43.5813 20.9594 43.5813 21.4022C43.5813 23.1488 44.4791 24.0221 46.2749 24.0221C47.4802 24.0221 48.4765 23.6531 49.2637 22.9151C50.0509 22.1525 50.5921 21.0332 50.8872 19.5572L52.8798 9.6679H59.8906Z" />
          <path d="M68.2438 30C66.5219 30 64.8614 29.8155 63.2625 29.4465C61.6881 29.0775 60.4582 28.6101 59.5726 28.0443L62.1186 23.1365C63.0288 23.7023 64.1111 24.1574 65.3657 24.5018C66.6203 24.8216 67.8502 24.9815 69.0556 24.9815C71.1957 24.9815 72.2658 24.5018 72.2658 23.5424C72.2658 23.1488 72.0075 22.8659 71.4909 22.6937C70.9989 22.4969 70.1995 22.3124 69.0925 22.1402C67.6165 21.8696 66.3989 21.5867 65.4395 21.2915C64.5047 20.9717 63.6807 20.4428 62.9673 19.7048C62.2539 18.9668 61.8972 17.9336 61.8972 16.6052C61.8972 14.2927 62.8812 12.5092 64.8491 11.2546C66.8417 9.9754 69.4123 9.33579 72.561 9.33579C73.9877 9.33579 75.3653 9.48339 76.6937 9.7786C78.022 10.0492 79.1782 10.4305 80.1621 10.9225L77.6899 15.8303C76.0172 14.8216 74.0369 14.3173 71.7492 14.3173C70.6668 14.3173 69.8551 14.4649 69.3139 14.7601C68.7973 15.0307 68.539 15.3875 68.539 15.8303C68.539 16.2239 68.785 16.5191 69.277 16.7159C69.7936 16.8881 70.63 17.0849 71.7861 17.3063C73.2129 17.5523 74.3936 17.8352 75.3284 18.155C76.2878 18.4748 77.1118 19.0037 77.8006 19.7417C78.514 20.4797 78.8707 21.4883 78.8707 22.7675C78.8707 25.08 77.8744 26.8635 75.8819 28.1181C73.8893 29.3727 71.3433 30 68.2438 30Z" />
          <path d="M84.5854 9.6679H91.5593L87.5742 29.6679H80.6003L84.5854 9.6679ZM89.0502 7.45387C87.8448 7.45387 86.8731 7.12177 86.1351 6.45757C85.3972 5.79336 85.0282 4.96925 85.0282 3.98524C85.0282 2.82903 85.4341 1.88192 86.2458 1.14391C87.0822 0.381304 88.1769 0 89.5298 0C90.7598 0 91.7438 0.319802 92.4818 0.959408C93.2197 1.57441 93.5887 2.37392 93.5887 3.35793C93.5887 4.56334 93.1705 5.54736 92.3342 6.30996C91.4978 7.07257 90.4031 7.45387 89.0502 7.45387Z" />
          <path d="M108.404 18.524L115.12 29.6679H106.929L102.833 22.8413L99.9546 25.3506L99.106 29.6679H92.0952L97.5562 2.28782H104.567L101.726 16.4945L109.807 9.6679H118.662L108.404 18.524Z" />
          <path d="M120.535 30C119.379 30 118.42 29.6433 117.657 28.9299C116.919 28.1919 116.55 27.2694 116.55 26.1624C116.55 24.8339 116.981 23.7638 117.842 22.952C118.727 22.1156 119.797 21.6974 121.052 21.6974C122.233 21.6974 123.18 22.0541 123.893 22.7675C124.631 23.4563 125 24.3788 125 25.5351C125 26.8389 124.557 27.909 123.672 28.7454C122.811 29.5818 121.765 30 120.535 30Z" />
        </svg>
      );
    }
    case 'play': {
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.622 8.415L15.501 11.667C15.5559 11.7035 15.6009 11.753 15.632 11.8111C15.6631 11.8692 15.6794 11.9341 15.6794 12C15.6794 12.0659 15.6631 12.1308 15.632 12.1889C15.6009 12.247 15.5559 12.2965 15.501 12.333L10.621 15.585C10.5608 15.6249 10.491 15.6477 10.4189 15.6512C10.3468 15.6546 10.2751 15.6384 10.2114 15.6043C10.1477 15.5703 10.0945 15.5197 10.0573 15.4578C10.02 15.396 10.0003 15.3252 10 15.253V8.747C10.0001 8.67465 10.0199 8.60369 10.0572 8.54168C10.0944 8.47967 10.1478 8.42893 10.2116 8.39486C10.2755 8.36079 10.3473 8.34467 10.4196 8.34822C10.4919 8.35177 10.5618 8.37485 10.622 8.415Z" />
        </svg>
      );
    }
    default: {
      return null;
    }
  }
};

export default Icon;
