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
    case 'bagpipes':
      return (
        <svg
          className={className}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5.85938 7.10938H1.17188C0.524141 7.10938 0 7.63352 0 8.28125C0 8.92898 0.524141 9.45312 1.17188 9.45312H2.34375V14.1406H4.6875V9.45312H5.85938C6.50711 9.45312 7.03125 8.92898 7.03125 8.28125C7.03125 7.63352 6.50711 7.10938 5.85938 7.10938Z" />
          <path d="M36.4844 14.1406H35.3125V9.23727C36.6736 8.75187 37.6562 7.46328 37.6562 5.9375C37.6562 3.99891 36.0792 2.42188 34.1406 2.42188C32.202 2.42188 30.625 3.99891 30.625 5.9375C30.625 7.46328 31.6077 8.75187 32.9688 9.23727V14.1406H31.7969C31.1491 14.1406 30.625 14.6648 30.625 15.3125C30.625 15.9602 31.1491 16.4844 31.7969 16.4844H32.9688V18.8281H35.3125V16.4844H36.4844C37.1321 16.4844 37.6562 15.9602 37.6562 15.3125C37.6562 14.6648 37.1321 14.1406 36.4844 14.1406Z" />
          <path d="M37.6562 21.1719H8.20312C6.91109 21.1719 5.85938 20.1202 5.85938 18.8281V17.6562C5.85938 17.0085 5.33523 16.4844 4.6875 16.4844H2.34375C1.69602 16.4844 1.17188 17.0085 1.17188 17.6562V18.8281C1.17188 22.7054 4.32586 25.8594 8.20312 25.8594H12.0859C13.2038 32.5077 18.9713 37.5781 25.9375 37.5781C33.7041 37.5781 40 31.2822 40 23.5156C40 22.2212 38.9507 21.1719 37.6562 21.1719Z" />
          <path d="M27.1094 14.1406H25.9375V9.23727C27.2986 8.75187 28.2812 7.46328 28.2812 5.9375C28.2812 3.99891 26.7042 2.42188 24.7656 2.42188C22.827 2.42188 21.25 3.99891 21.25 5.9375C21.25 7.46328 22.2327 8.75187 23.5938 9.23727V14.1406H22.4219C21.7741 14.1406 21.25 14.6648 21.25 15.3125C21.25 15.9602 21.7741 16.4844 22.4219 16.4844H23.5938V18.8281H25.9375V16.4844H27.1094C27.7571 16.4844 28.2812 15.9602 28.2812 15.3125C28.2812 14.6648 27.7571 14.1406 27.1094 14.1406Z" />
          <path d="M17.7344 14.1406H16.5625V9.23727C17.9236 8.75187 18.9062 7.46328 18.9062 5.9375C18.9062 3.99891 17.3292 2.42188 15.3906 2.42188C13.452 2.42188 11.875 3.99891 11.875 5.9375C11.875 7.46328 12.8577 8.75187 14.2188 9.23727V14.1406H13.0469C12.3991 14.1406 11.875 14.6648 11.875 15.3125C11.875 15.9602 12.3991 16.4844 13.0469 16.4844H14.2188V18.8281H16.5625V16.4844H17.7344C18.3821 16.4844 18.9062 15.9602 18.9062 15.3125C18.9062 14.6648 18.3821 14.1406 17.7344 14.1406Z" />
        </svg>
      );
    case 'dj-mixer': {
      return (
        <svg
          className={className}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M36.4844 6.52637H3.51562C1.57711 6.52637 0 8.10348 0 10.042V29.9571C0 31.8956 1.57711 33.4727 3.51562 33.4727H36.4844C38.4229 33.4727 40 31.8956 40 29.9571V10.042C40 8.10348 38.4229 6.52637 36.4844 6.52637ZM13.4672 28.9458C8.53422 28.9458 4.52094 24.9325 4.52094 19.9996C4.52094 15.0666 8.53422 11.0533 13.4672 11.0533C18.4002 11.0533 22.4134 15.0666 22.4134 19.9996C22.4134 24.9325 18.4002 28.9458 13.4672 28.9458ZM26.9423 16.6661V26.6204C26.9423 27.2675 26.4176 27.7922 25.7704 27.7922C25.1232 27.7922 24.5985 27.2675 24.5985 26.6204V16.6661C24.1775 16.4883 23.882 16.0717 23.882 15.586C23.882 15.1003 24.1775 14.6836 24.5985 14.5059V13.6377C24.5985 12.9905 25.1232 12.4658 25.7704 12.4658C26.4176 12.4658 26.9423 12.9905 26.9423 13.6377V14.5059C27.3634 14.6836 27.6589 15.1003 27.6589 15.586C27.6589 16.0717 27.3634 16.4883 26.9423 16.6661ZM31.197 25.1809V26.6203C31.197 27.2675 30.6723 27.7922 30.0252 27.7922C29.378 27.7922 28.8533 27.2675 28.8533 26.6203V25.1809C28.4323 25.0032 28.1366 24.5866 28.1366 24.1008C28.1366 23.6151 28.4322 23.1984 28.8533 23.0207V13.6377C28.8533 12.9905 29.378 12.4658 30.0252 12.4658C30.6723 12.4658 31.197 12.9905 31.197 13.6377V23.0208C31.6181 23.1986 31.9137 23.6152 31.9137 24.1009C31.9137 24.5866 31.6181 25.0032 31.197 25.1809ZM35.4518 16.6661V26.6204C35.4518 27.2675 34.9271 27.7922 34.2799 27.7922C33.6327 27.7922 33.108 27.2675 33.108 26.6204V16.6661C32.687 16.4884 32.3914 16.0717 32.3914 15.586C32.3914 15.1003 32.687 14.6836 33.108 14.5059V13.6377C33.108 12.9905 33.6327 12.4658 34.2799 12.4658C34.9271 12.4658 35.4518 12.9905 35.4518 13.6377V14.5059C35.8729 14.6836 36.1684 15.1003 36.1684 15.586C36.1684 16.0717 35.8729 16.4883 35.4518 16.6661Z" />
          <path d="M13.4677 16.6182C11.6027 16.6182 10.0854 18.1354 10.0854 20.0004C10.0854 21.8654 11.6027 23.3827 13.4677 23.3827C15.3327 23.3827 16.85 21.8654 16.85 20.0004C16.85 18.1354 15.3327 16.6182 13.4677 16.6182ZM13.4677 21.0389C12.8951 21.0389 12.4292 20.5731 12.4292 20.0004C12.4292 19.4278 12.8951 18.9619 13.4677 18.9619C14.0404 18.9619 14.5062 19.4278 14.5062 20.0004C14.5062 20.5731 14.0404 21.0389 13.4677 21.0389Z" />
        </svg>
      );
    }
    case 'guitar': {
      return (
        <svg
          className={className}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_894_100)">
            <path d="M23.8838 12.7812L25.5209 11.1442L28.9022 14.5255L27.2651 16.1626L23.8838 12.7812Z" />
            <path d="M20.6094 16.0557L22.2465 14.4186L25.6278 17.7999L23.9907 19.437L20.6094 16.0557Z" />
            <path d="M29.4627 5.18964C29.2756 5.2787 29.1923 5.4976 29.2731 5.68792L29.2883 5.72378L29.681 6.99174C29.66 7.01065 29.639 7.02948 29.6186 7.04979L27.1626 9.50573L30.5445 12.8875L33.0005 10.4316C33.028 10.4041 33.0541 10.3759 33.079 10.3472L34.3484 10.7404C34.5302 10.7967 34.7291 10.7096 34.8109 10.5376C36.4045 7.1894 39.6355 5.63643 39.7769 5.56987C39.8714 5.52604 39.9452 5.4444 39.9793 5.34581C40.0134 5.24737 40.0058 5.1376 39.9586 5.04471L38.3318 1.84659C38.3134 1.81034 38.2894 1.77737 38.2605 1.74862C38.2318 1.71987 38.1988 1.69588 38.1627 1.67753L35.01 0.0738536L34.9831 0.0572911C34.9025 0.00760357 34.8067 -0.0105995 34.7133 0.00596295C34.5892 0.0279942 34.4836 0.1094 34.4306 0.223775C34.4151 0.257213 32.8436 3.58057 29.4627 5.18964Z" />
            <path d="M20.8807 30.2373C20.8371 29.5352 21.2891 28.908 21.9554 28.746C23.1296 28.4604 24.2018 27.8536 25.0561 26.9912C25.6635 26.378 26.136 25.6623 26.4607 24.864C26.6364 24.4322 26.5357 23.9379 26.207 23.6093C26.202 23.6043 26.1969 23.5993 26.1918 23.5944C25.8511 23.2659 25.3448 23.1779 24.9132 23.3721C23.7363 23.9015 22.1474 23.6119 20.7479 22.6839L22.3576 21.0742L18.9757 17.6924L17.9562 18.7119C17.7318 17.5912 17.932 16.5384 18.6134 15.857C18.8093 15.6611 19.0396 15.5004 19.2982 15.3792C19.7459 15.1694 20.0109 14.6984 19.9579 14.2067C19.9049 13.7151 19.5454 13.3114 19.0632 13.2019C16.8545 12.7002 14.5829 13.3463 12.9865 14.9302C12.1223 15.7877 11.5156 16.8639 11.2321 18.0425C11.0721 18.7079 10.4451 19.1604 9.74137 19.1183C7.06559 18.9582 4.45145 19.946 2.5691 21.8284C-0.856367 25.2539 -0.856367 30.8275 2.5691 34.2529L5.7473 37.431C9.17277 40.8565 14.7464 40.8565 18.1718 37.431C20.0601 35.5427 21.0474 32.9208 20.8807 30.2373ZM11.8378 30.6026L9.39762 28.1625C8.94551 27.7104 8.94551 26.9773 9.39762 26.5251C9.84973 26.073 10.5828 26.073 11.035 26.5251L13.4751 28.9653C13.9272 29.4174 13.9272 30.1504 13.4751 30.6026C13.0229 31.0547 12.2899 31.0547 11.8378 30.6026ZM15.498 26.9424L13.0579 24.5022C12.6057 24.0501 12.6057 23.3171 13.0579 22.8649C13.51 22.4128 14.243 22.4128 14.6952 22.8649L17.1354 25.305C17.5875 25.7572 17.5875 26.4902 17.1354 26.9424C16.6832 27.3945 15.9501 27.3945 15.498 26.9424Z" />
          </g>
          <defs>
            <clipPath id="clip0_894_100">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
    case 'saxophone': {
      return (
        <svg
          className={className}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_894_101)">
            <path d="M37.6558 14.1406H25.8593C24.5648 14.1406 23.5156 15.1899 23.5156 16.4843C23.5156 17.7786 24.5649 18.828 25.8593 18.828H37.6558C38.9503 18.828 39.9995 17.7785 39.9995 16.4843C39.9995 15.1899 38.9503 14.1406 37.6558 14.1406Z" />
            <path d="M37.6557 21.1723H25.8591V24.5917C25.8591 26.5829 24.241 28.2034 22.2532 28.2034C20.5401 28.2034 19.0535 26.9857 18.7216 25.3333L14.9464 5.08444C14.2531 1.61578 10.7826 -0.731329 7.11657 0.208279C4.3529 0.918981 2.42236 3.52359 2.42236 6.54358V11.7977H1.17236C0.524628 11.7977 0.000488281 12.3218 0.000488281 12.9696C0.000488281 13.6173 0.524628 14.1415 1.17236 14.1415H3.59415H5.93782C6.58501 14.1415 7.10969 13.6168 7.10969 12.9696V8.20412C7.10969 7.55678 7.63438 7.03225 8.28157 7.03225C8.92875 7.03225 9.45344 7.55678 9.45344 8.20412V14.1415V16.4851H8.28157C7.63383 16.4851 7.10969 17.0093 7.10969 17.657C7.10969 18.3047 7.63383 18.8289 8.28157 18.8289H9.45344V21.1725H8.28157C7.63383 21.1725 7.10969 21.6967 7.10969 22.3444C7.10969 22.9921 7.63383 23.5163 8.28157 23.5163H9.45344V24.6882V25.86H8.28157C7.63383 25.86 7.10969 26.3842 7.10969 27.0319C7.10969 27.6796 7.63383 28.2038 8.28157 28.2038H9.6643C10.7823 34.8519 16.5496 40.0003 23.5155 40.0003H23.5361L23.947 39.9934C31.4632 39.7691 37.6558 33.1223 37.6558 25.2707L37.6557 21.1723Z" />
          </g>
          <defs>
            <clipPath id="clip0_894_101">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
    case 'trumpet': {
      return (
        <svg
          className={className}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_894_99)">
            <path d="M39.4887 12.2986L27.7019 0.511625C27.2206 0.0302194 26.503 -0.126812 25.8642 0.109204C25.2256 0.345375 24.7828 0.931781 24.7307 1.61069L23.7979 13.7368L17.7893 19.7454L16.0754 18.0314C15.3946 17.3506 14.2906 17.3506 13.6097 18.0314C12.9289 18.7122 12.9289 19.8161 13.6097 20.497L15.3236 22.2108L11.8959 25.6386L10.1821 23.9248C9.50147 23.2438 8.39748 23.244 7.71647 23.9248C7.03561 24.6056 7.03561 25.7094 7.71647 26.3904L9.43029 28.1044L3.21624 34.3185L2.97578 34.078C2.295 33.3972 1.19101 33.3972 0.510155 34.078C-0.170703 34.7588 -0.170703 35.8628 0.510155 36.5436L1.98351 38.017L3.45687 39.4903C3.79734 39.8307 4.24351 40.0009 4.6896 40.0009C5.13585 40.0009 5.58202 39.8306 5.92233 39.4903C6.60319 38.8094 6.60319 37.7055 5.92233 37.0246L5.68186 36.7842L9.31569 33.1504C9.60834 33.9218 10.0622 34.6297 10.6632 35.2307C11.7796 36.3469 13.264 36.9618 14.8427 36.9618C16.4215 36.9618 17.9057 36.347 19.022 35.2307L24.9158 29.3372C27.2202 27.0325 27.2202 23.2825 24.9156 20.9779C24.3146 20.3772 23.6066 19.9234 22.8353 19.6307L26.2635 16.2024L38.3896 15.2697C39.0685 15.2176 39.6549 14.7748 39.8911 14.1362C40.1273 13.4976 39.9702 12.7801 39.4887 12.2986ZM22.4502 26.8715L16.5564 32.7649C16.0986 33.2227 15.49 33.4748 14.8428 33.4748C14.1954 33.4748 13.5865 33.2227 13.1288 32.7649C12.6711 32.3072 12.419 31.6986 12.419 31.0511C12.419 30.4037 12.6711 29.795 13.1288 29.3373L19.0245 23.4417C19.4821 22.9854 20.0897 22.734 20.7361 22.734C21.3836 22.734 21.9926 22.9861 22.4503 23.4436C23.395 24.3888 23.395 25.9265 22.4502 26.8715Z" />
          </g>
          <defs>
            <clipPath id="clip0_894_99">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
    default: {
      return null;
    }
  }
};

export default Icon;
