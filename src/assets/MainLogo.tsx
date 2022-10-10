import React from "react";

/*
TO DO: 
  - interface for props
  - outline what props should be
  - styles
*/

interface mainLogoSpecs {
  height?: "sm" | "md";
  color?: string;
  className?: string;
}

const MainLogo = (props: mainLogoSpecs) => {
  return (
    <div
      className={props.className}
      style={{
        width: "auto",
        margin: "1.5rem 0",
      }}
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 230 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M114.504 51.5898C114.361 51.8893 114.178 52.2474 113.957 52.6641C113.749 53.0677 113.508 53.4909 113.234 53.9336C112.961 54.3763 112.655 54.819 112.316 55.2617C111.978 55.6914 111.607 56.082 111.203 56.4336C110.812 56.7721 110.389 57.0456 109.934 57.2539C109.491 57.4753 109.016 57.5859 108.508 57.5859C107.727 57.5859 107.056 57.3451 106.496 56.8633C105.936 56.3815 105.461 55.75 105.07 54.9688C104.68 54.1875 104.361 53.3021 104.113 52.3125C103.879 51.3099 103.697 50.2943 103.566 49.2656C103.436 48.224 103.345 47.2148 103.293 46.2383C103.254 45.2617 103.234 44.3958 103.234 43.6406C103.234 42.5469 103.267 41.4141 103.332 40.2422C103.41 39.0703 103.527 37.9245 103.684 36.8047C103.84 35.6849 104.035 34.6237 104.27 33.6211C104.517 32.6185 104.803 31.7396 105.129 30.9844C105.467 30.2292 105.852 29.6302 106.281 29.1875C106.711 28.7448 107.199 28.5234 107.746 28.5234C108.176 28.5234 108.56 28.6276 108.898 28.8359C109.25 29.0312 109.543 29.3568 109.777 29.8125C110.012 30.2682 110.194 30.8607 110.324 31.5898C110.454 32.319 110.52 33.2109 110.52 34.2656C110.52 35.5677 110.383 36.9154 110.109 38.3086C109.836 39.6888 109.465 41.082 108.996 42.4883C108.527 43.8945 107.974 45.3008 107.336 46.707C106.698 48.1003 106.014 49.4609 105.285 50.7891C105.611 52.4427 106.047 53.7448 106.594 54.6953C107.141 55.6328 107.798 56.1016 108.566 56.1016C109.087 56.1016 109.589 55.8997 110.07 55.4961C110.552 55.0794 110.995 54.5911 111.398 54.0312C111.802 53.4714 112.154 52.9049 112.453 52.332C112.766 51.7461 113.007 51.2773 113.176 50.9258C113.241 50.7956 113.332 50.6979 113.449 50.6328C113.566 50.5547 113.697 50.5156 113.84 50.5156C114.061 50.5156 114.237 50.5938 114.367 50.75C114.51 50.9062 114.582 51.082 114.582 51.2773C114.582 51.3555 114.556 51.4596 114.504 51.5898ZM104.719 43.7383C104.719 44.5716 104.738 45.3724 104.777 46.1406C104.816 46.9089 104.868 47.6445 104.934 48.3477C105.48 47.293 106.001 46.1732 106.496 44.9883C106.991 43.7904 107.427 42.5859 107.805 41.375C108.182 40.151 108.482 38.9401 108.703 37.7422C108.938 36.5312 109.055 35.3789 109.055 34.2852C109.055 32.7487 108.931 31.6484 108.684 30.9844C108.436 30.3203 108.104 29.9883 107.688 29.9883C107.414 29.9883 107.147 30.1771 106.887 30.5547C106.639 30.9323 106.405 31.4466 106.184 32.0977C105.962 32.7487 105.76 33.5169 105.578 34.4023C105.396 35.2878 105.24 36.2383 105.109 37.2539C104.992 38.2695 104.895 39.3307 104.816 40.4375C104.751 41.5443 104.719 42.6445 104.719 43.7383ZM115.539 54.8516C115.812 55.2292 116.164 55.5352 116.594 55.7695C117.023 55.9909 117.551 56.1016 118.176 56.1016C118.814 56.1016 119.393 55.9518 119.914 55.6523C120.435 55.3398 120.91 54.9362 121.34 54.4414C121.77 53.9466 122.154 53.3932 122.492 52.7812C122.831 52.1693 123.137 51.5573 123.41 50.9453C123.475 50.8021 123.566 50.6979 123.684 50.6328C123.801 50.5547 123.931 50.5156 124.074 50.5156C124.296 50.5156 124.471 50.5938 124.602 50.75C124.745 50.9062 124.816 51.0755 124.816 51.2578C124.816 51.3229 124.81 51.3815 124.797 51.4336C124.784 51.4727 124.764 51.5182 124.738 51.5703C123.84 53.5495 122.857 55.0404 121.789 56.043C120.734 57.0456 119.536 57.5599 118.195 57.5859C117.336 57.5859 116.594 57.4167 115.969 57.0781C115.344 56.7526 114.829 56.3294 114.426 55.8086C114.022 55.2747 113.723 54.6758 113.527 54.0117C113.332 53.3477 113.234 52.6836 113.234 52.0195C113.234 51.3555 113.312 50.7435 113.469 50.1836C113.638 49.6237 113.872 49.1354 114.172 48.7188C114.484 48.3021 114.849 47.9766 115.266 47.7422C115.695 47.5078 116.164 47.3906 116.672 47.3906C116.971 47.3906 117.264 47.4557 117.551 47.5859C117.85 47.7031 118.117 47.8789 118.352 48.1133C118.586 48.3346 118.775 48.6081 118.918 48.9336C119.061 49.2591 119.133 49.6302 119.133 50.0469C119.133 50.5807 119.042 51.082 118.859 51.5508C118.677 52.0195 118.423 52.4557 118.098 52.8594C117.785 53.263 117.408 53.6341 116.965 53.9727C116.522 54.3112 116.047 54.6042 115.539 54.8516ZM114.953 53.582C115.357 53.4128 115.721 53.1979 116.047 52.9375C116.385 52.6771 116.672 52.3906 116.906 52.0781C117.141 51.7656 117.323 51.4401 117.453 51.1016C117.583 50.75 117.648 50.3984 117.648 50.0469C117.648 49.6562 117.551 49.3633 117.355 49.168C117.16 48.9596 116.932 48.8555 116.672 48.8555C116.32 48.8555 116.021 48.9531 115.773 49.1484C115.526 49.3438 115.324 49.5977 115.168 49.9102C115.012 50.2227 114.895 50.5742 114.816 50.9648C114.751 51.3424 114.719 51.7201 114.719 52.0977C114.719 52.332 114.738 52.5794 114.777 52.8398C114.829 53.1003 114.888 53.3477 114.953 53.582ZM125.598 49.7734C125.52 49.9818 125.422 50.2161 125.305 50.4766C125.201 50.737 125.077 51.0104 124.934 51.2969C124.816 51.5182 124.693 51.694 124.562 51.8242C124.445 51.9414 124.289 52 124.094 52C123.872 52 123.697 51.9349 123.566 51.8047C123.436 51.6615 123.371 51.4987 123.371 51.3164C123.371 51.2513 123.378 51.1992 123.391 51.1602C123.404 51.1081 123.436 51.0299 123.488 50.9258C123.827 50.2747 124.074 49.7083 124.23 49.2266C124.4 48.7318 124.536 48.2174 124.641 47.6836C124.549 47.3841 124.484 47.1302 124.445 46.9219C124.406 46.7135 124.387 46.4987 124.387 46.2773C124.387 45.8477 124.478 45.5026 124.66 45.2422C124.842 44.9688 125.096 44.832 125.422 44.832C125.721 44.832 125.956 44.9622 126.125 45.2227C126.307 45.4831 126.398 45.8021 126.398 46.1797C126.398 46.388 126.379 46.5964 126.34 46.8047C126.301 47.013 126.249 47.2734 126.184 47.5859C126.483 48.3281 126.783 48.9857 127.082 49.5586C127.382 50.1315 127.648 50.6589 127.883 51.1406C128.117 51.6094 128.306 52.0521 128.449 52.4688C128.605 52.8854 128.684 53.3021 128.684 53.7188C128.684 54.2656 128.573 54.7865 128.352 55.2812C128.13 55.776 127.766 56.1927 127.258 56.5312C127.323 56.5443 127.388 56.5508 127.453 56.5508C127.518 56.5508 127.583 56.5508 127.648 56.5508C128.391 56.5508 129.074 56.3815 129.699 56.043C130.324 55.7044 130.884 55.2682 131.379 54.7344C131.887 54.1875 132.336 53.5885 132.727 52.9375C133.117 52.2734 133.456 51.6159 133.742 50.9648C133.872 50.6654 134.055 50.5156 134.289 50.5156C134.51 50.5156 134.68 50.5938 134.797 50.75C134.927 50.9062 134.992 51.0755 134.992 51.2578C134.992 51.362 134.973 51.4596 134.934 51.5508C134.79 51.9023 134.602 52.306 134.367 52.7617C134.146 53.2044 133.872 53.6667 133.547 54.1484C133.234 54.6172 132.87 55.0794 132.453 55.5352C132.036 55.9909 131.568 56.401 131.047 56.7656C130.539 57.1172 129.979 57.3971 129.367 57.6055C128.755 57.8268 128.085 57.9375 127.355 57.9375C126.483 57.9375 125.669 57.7812 124.914 57.4688C124.172 57.1693 123.566 56.668 123.098 55.9648C123.02 55.8477 122.98 55.724 122.98 55.5938C122.98 55.3984 123.052 55.2292 123.195 55.0859C123.352 54.9297 123.527 54.8516 123.723 54.8516C123.931 54.8516 124.107 54.9232 124.25 55.0664C124.263 55.0924 124.309 55.138 124.387 55.2031C124.465 55.2552 124.556 55.3203 124.66 55.3984C124.777 55.4635 124.908 55.5221 125.051 55.5742C125.207 55.6263 125.363 55.6523 125.52 55.6523C125.832 55.6523 126.092 55.5872 126.301 55.457C126.522 55.3268 126.698 55.1706 126.828 54.9883C126.958 54.793 127.049 54.5911 127.102 54.3828C127.167 54.1615 127.199 53.9727 127.199 53.8164C127.199 53.4909 127.147 53.1654 127.043 52.8398C126.939 52.5143 126.802 52.1888 126.633 51.8633C126.477 51.5378 126.301 51.2057 126.105 50.8672C125.923 50.5156 125.754 50.151 125.598 49.7734ZM144.699 51.5898C144.556 51.8893 144.374 52.2474 144.152 52.6641C143.944 53.0677 143.703 53.4909 143.43 53.9336C143.156 54.3763 142.85 54.819 142.512 55.2617C142.173 55.6914 141.802 56.082 141.398 56.4336C141.008 56.7721 140.585 57.0456 140.129 57.2539C139.686 57.4753 139.211 57.5859 138.703 57.5859C137.922 57.5859 137.251 57.3451 136.691 56.8633C136.132 56.3815 135.656 55.75 135.266 54.9688C134.875 54.1875 134.556 53.3021 134.309 52.3125C134.074 51.3099 133.892 50.2943 133.762 49.2656C133.632 48.224 133.54 47.2148 133.488 46.2383C133.449 45.2617 133.43 44.3958 133.43 43.6406C133.43 42.5469 133.462 41.4141 133.527 40.2422C133.605 39.0703 133.723 37.9245 133.879 36.8047C134.035 35.6849 134.23 34.6237 134.465 33.6211C134.712 32.6185 134.999 31.7396 135.324 30.9844C135.663 30.2292 136.047 29.6302 136.477 29.1875C136.906 28.7448 137.395 28.5234 137.941 28.5234C138.371 28.5234 138.755 28.6276 139.094 28.8359C139.445 29.0312 139.738 29.3568 139.973 29.8125C140.207 30.2682 140.389 30.8607 140.52 31.5898C140.65 32.319 140.715 33.2109 140.715 34.2656C140.715 35.5677 140.578 36.9154 140.305 38.3086C140.031 39.6888 139.66 41.082 139.191 42.4883C138.723 43.8945 138.169 45.3008 137.531 46.707C136.893 48.1003 136.21 49.4609 135.48 50.7891C135.806 52.4427 136.242 53.7448 136.789 54.6953C137.336 55.6328 137.993 56.1016 138.762 56.1016C139.283 56.1016 139.784 55.8997 140.266 55.4961C140.747 55.0794 141.19 54.5911 141.594 54.0312C141.997 53.4714 142.349 52.9049 142.648 52.332C142.961 51.7461 143.202 51.2773 143.371 50.9258C143.436 50.7956 143.527 50.6979 143.645 50.6328C143.762 50.5547 143.892 50.5156 144.035 50.5156C144.257 50.5156 144.432 50.5938 144.562 50.75C144.706 50.9062 144.777 51.082 144.777 51.2773C144.777 51.3555 144.751 51.4596 144.699 51.5898ZM134.914 43.7383C134.914 44.5716 134.934 45.3724 134.973 46.1406C135.012 46.9089 135.064 47.6445 135.129 48.3477C135.676 47.293 136.197 46.1732 136.691 44.9883C137.186 43.7904 137.622 42.5859 138 41.375C138.378 40.151 138.677 38.9401 138.898 37.7422C139.133 36.5312 139.25 35.3789 139.25 34.2852C139.25 32.7487 139.126 31.6484 138.879 30.9844C138.632 30.3203 138.299 29.9883 137.883 29.9883C137.609 29.9883 137.342 30.1771 137.082 30.5547C136.835 30.9323 136.6 31.4466 136.379 32.0977C136.158 32.7487 135.956 33.5169 135.773 34.4023C135.591 35.2878 135.435 36.2383 135.305 37.2539C135.188 38.2695 135.09 39.3307 135.012 40.4375C134.947 41.5443 134.914 42.6445 134.914 43.7383ZM146.574 41.668C146.574 42.1628 146.398 42.5859 146.047 42.9375C145.708 43.276 145.292 43.4453 144.797 43.4453C144.302 43.4453 143.879 43.276 143.527 42.9375C143.189 42.5859 143.02 42.1628 143.02 41.668C143.02 41.4206 143.065 41.1927 143.156 40.9844C143.247 40.763 143.371 40.5742 143.527 40.418C143.697 40.2487 143.885 40.1185 144.094 40.0273C144.315 39.9362 144.549 39.8906 144.797 39.8906C145.044 39.8906 145.272 39.9362 145.48 40.0273C145.702 40.1185 145.891 40.2487 146.047 40.418C146.216 40.5742 146.346 40.763 146.438 40.9844C146.529 41.1927 146.574 41.4206 146.574 41.668ZM143.41 53.1133C143.41 51.2383 143.527 49.3698 143.762 47.5078C143.788 47.3255 143.866 47.1693 143.996 47.0391C144.139 46.8958 144.322 46.8242 144.543 46.8242C144.738 46.8242 144.901 46.9023 145.031 47.0586C145.161 47.2018 145.227 47.3711 145.227 47.5664C145.227 47.6445 145.207 47.8789 145.168 48.2695C145.142 48.6602 145.103 49.1289 145.051 49.6758C145.012 50.2096 144.973 50.7826 144.934 51.3945C144.908 51.9935 144.895 52.5469 144.895 53.0547C144.895 53.7448 144.96 54.3047 145.09 54.7344C145.233 55.151 145.409 55.4766 145.617 55.7109C145.839 55.9453 146.066 56.1016 146.301 56.1797C146.548 56.2578 146.783 56.2969 147.004 56.2969C147.368 56.2969 147.746 56.1667 148.137 55.9062C148.527 55.6458 148.924 55.2812 149.328 54.8125C149.745 54.3438 150.161 53.7839 150.578 53.1328C150.995 52.4688 151.405 51.7331 151.809 50.9258C151.874 50.7956 151.965 50.6979 152.082 50.6328C152.199 50.5547 152.329 50.5156 152.473 50.5156C152.681 50.5156 152.85 50.5938 152.98 50.75C153.124 50.9062 153.195 51.0755 153.195 51.2578C153.195 51.388 153.169 51.4987 153.117 51.5898C152.961 51.8893 152.766 52.2539 152.531 52.6836C152.297 53.1133 152.03 53.556 151.73 54.0117C151.431 54.4674 151.099 54.9232 150.734 55.3789C150.383 55.8216 150.005 56.2253 149.602 56.5898C149.198 56.9414 148.775 57.2279 148.332 57.4492C147.889 57.6706 147.44 57.7812 146.984 57.7812C146.398 57.7812 145.884 57.6576 145.441 57.4102C144.999 57.1628 144.621 56.8307 144.309 56.4141C144.009 55.9974 143.781 55.5091 143.625 54.9492C143.482 54.3763 143.41 53.7643 143.41 53.1133ZM145.48 41.668C145.48 41.4857 145.409 41.3294 145.266 41.1992C145.135 41.056 144.979 40.9844 144.797 40.9844C144.615 40.9844 144.458 41.056 144.328 41.1992C144.198 41.3294 144.133 41.4857 144.133 41.668C144.133 41.8503 144.198 42.0065 144.328 42.1367C144.458 42.2669 144.615 42.332 144.797 42.332C144.979 42.332 145.135 42.2669 145.266 42.1367C145.409 42.0065 145.48 41.8503 145.48 41.668ZM154.133 54.8516C154.406 55.2292 154.758 55.5352 155.188 55.7695C155.617 55.9909 156.145 56.1016 156.77 56.1016C157.408 56.1016 157.987 55.9518 158.508 55.6523C159.029 55.3398 159.504 54.9362 159.934 54.4414C160.363 53.9466 160.747 53.3932 161.086 52.7812C161.424 52.1693 161.73 51.5573 162.004 50.9453C162.069 50.8021 162.16 50.6979 162.277 50.6328C162.395 50.5547 162.525 50.5156 162.668 50.5156C162.889 50.5156 163.065 50.5938 163.195 50.75C163.339 50.9062 163.41 51.0755 163.41 51.2578C163.41 51.3229 163.404 51.3815 163.391 51.4336C163.378 51.4727 163.358 51.5182 163.332 51.5703C162.434 53.5495 161.451 55.0404 160.383 56.043C159.328 57.0456 158.13 57.5599 156.789 57.5859C155.93 57.5859 155.188 57.4167 154.562 57.0781C153.938 56.7526 153.423 56.3294 153.02 55.8086C152.616 55.2747 152.316 54.6758 152.121 54.0117C151.926 53.3477 151.828 52.6836 151.828 52.0195C151.828 51.3555 151.906 50.7435 152.062 50.1836C152.232 49.6237 152.466 49.1354 152.766 48.7188C153.078 48.3021 153.443 47.9766 153.859 47.7422C154.289 47.5078 154.758 47.3906 155.266 47.3906C155.565 47.3906 155.858 47.4557 156.145 47.5859C156.444 47.7031 156.711 47.8789 156.945 48.1133C157.18 48.3346 157.368 48.6081 157.512 48.9336C157.655 49.2591 157.727 49.6302 157.727 50.0469C157.727 50.5807 157.635 51.082 157.453 51.5508C157.271 52.0195 157.017 52.4557 156.691 52.8594C156.379 53.263 156.001 53.6341 155.559 53.9727C155.116 54.3112 154.641 54.6042 154.133 54.8516ZM153.547 53.582C153.951 53.4128 154.315 53.1979 154.641 52.9375C154.979 52.6771 155.266 52.3906 155.5 52.0781C155.734 51.7656 155.917 51.4401 156.047 51.1016C156.177 50.75 156.242 50.3984 156.242 50.0469C156.242 49.6562 156.145 49.3633 155.949 49.168C155.754 48.9596 155.526 48.8555 155.266 48.8555C154.914 48.8555 154.615 48.9531 154.367 49.1484C154.12 49.3438 153.918 49.5977 153.762 49.9102C153.605 50.2227 153.488 50.5742 153.41 50.9648C153.345 51.3424 153.312 51.7201 153.312 52.0977C153.312 52.332 153.332 52.5794 153.371 52.8398C153.423 53.1003 153.482 53.3477 153.547 53.582ZM165.93 56.4336C165.93 56.7331 165.826 56.9805 165.617 57.1758C165.422 57.3841 165.174 57.4883 164.875 57.4883C164.576 57.4883 164.322 57.3841 164.113 57.1758C163.918 56.9805 163.82 56.7331 163.82 56.4336C163.82 56.1471 163.918 55.9062 164.113 55.7109C164.322 55.5026 164.576 55.3984 164.875 55.3984C165.174 55.3984 165.422 55.5026 165.617 55.7109C165.826 55.9062 165.93 56.1471 165.93 56.4336ZM178.215 54.8516C177.889 54.8516 177.603 54.8255 177.355 54.7734C177.16 55.1641 176.926 55.5286 176.652 55.8672C176.379 56.1927 176.06 56.4792 175.695 56.7266C175.344 56.974 174.947 57.1693 174.504 57.3125C174.061 57.4557 173.579 57.5273 173.059 57.5273C172.447 57.5273 171.887 57.4167 171.379 57.1953C170.871 56.987 170.428 56.694 170.051 56.3164C169.673 55.9258 169.38 55.4635 169.172 54.9297C168.964 54.3828 168.859 53.7839 168.859 53.1328C168.859 52.2995 169.009 51.5768 169.309 50.9648C169.608 50.3398 169.953 49.8255 170.344 49.4219C170.734 49.0052 171.125 48.6992 171.516 48.5039C171.906 48.2956 172.199 48.1914 172.395 48.1914C172.616 48.1914 172.779 48.25 172.883 48.3672C173 48.4844 173.059 48.6406 173.059 48.8359C173.059 49.0573 172.987 49.2266 172.844 49.3438C172.714 49.4479 172.544 49.5521 172.336 49.6562C172.128 49.7604 171.906 49.9102 171.672 50.1055C171.438 50.2878 171.216 50.5221 171.008 50.8086C170.812 51.0951 170.65 51.4336 170.52 51.8242C170.389 52.2148 170.324 52.651 170.324 53.1328C170.324 53.5625 170.389 53.9661 170.52 54.3438C170.65 54.7083 170.839 55.0273 171.086 55.3008C171.333 55.5612 171.626 55.7695 171.965 55.9258C172.303 56.069 172.681 56.1406 173.098 56.1406C173.84 56.1406 174.452 55.9714 174.934 55.6328C175.428 55.2812 175.806 54.8385 176.066 54.3047C175.298 53.901 174.667 53.3281 174.172 52.5859C173.677 51.8438 173.43 51.0104 173.43 50.0859C173.43 49.3438 173.605 48.7383 173.957 48.2695C174.322 47.8008 174.797 47.5664 175.383 47.5664C175.734 47.5664 176.066 47.651 176.379 47.8203C176.691 47.9896 176.965 48.2565 177.199 48.6211C177.447 48.9857 177.642 49.4544 177.785 50.0273C177.928 50.6003 178 51.2839 178 52.0781C178 52.4948 177.948 52.931 177.844 53.3867C177.922 53.3997 178 53.4062 178.078 53.4062C178.156 53.4062 178.241 53.4062 178.332 53.4062C178.775 53.4062 179.172 53.3542 179.523 53.25C179.875 53.1458 180.194 52.9896 180.48 52.7812C180.767 52.5729 181.021 52.306 181.242 51.9805C181.477 51.6549 181.698 51.2773 181.906 50.8477C181.945 50.7695 182.03 50.6979 182.16 50.6328C182.29 50.5547 182.421 50.5156 182.551 50.5156C182.72 50.5156 182.876 50.5872 183.02 50.7305C183.176 50.8607 183.254 51.0365 183.254 51.2578C183.254 51.362 183.228 51.4792 183.176 51.6094C183.124 51.7266 183.072 51.8372 183.02 51.9414C182.798 52.332 182.538 52.7096 182.238 53.0742C181.952 53.4258 181.607 53.7383 181.203 54.0117C180.812 54.2721 180.37 54.4805 179.875 54.6367C179.38 54.793 178.827 54.8646 178.215 54.8516ZM174.875 49.9297C174.875 50.1771 174.908 50.4375 174.973 50.7109C175.038 50.9844 175.135 51.2578 175.266 51.5312C175.409 51.7917 175.578 52.0456 175.773 52.293C175.982 52.5273 176.223 52.7292 176.496 52.8984C176.535 52.625 176.555 52.3581 176.555 52.0977C176.555 51.7461 176.529 51.388 176.477 51.0234C176.424 50.6589 176.346 50.3268 176.242 50.0273C176.151 49.7148 176.034 49.4674 175.891 49.2852C175.747 49.0898 175.578 48.9922 175.383 48.9922C175.305 48.9922 175.201 49.0508 175.07 49.168C174.94 49.2852 174.875 49.5391 174.875 49.9297ZM185.773 56.4336C185.773 56.7331 185.669 56.9805 185.461 57.1758C185.266 57.3841 185.018 57.4883 184.719 57.4883C184.419 57.4883 184.165 57.3841 183.957 57.1758C183.762 56.9805 183.664 56.7331 183.664 56.4336C183.664 56.1471 183.762 55.9062 183.957 55.7109C184.165 55.5026 184.419 55.3984 184.719 55.3984C185.018 55.3984 185.266 55.5026 185.461 55.7109C185.669 55.9062 185.773 56.1471 185.773 56.4336ZM190.598 55.3398C190.806 54.8971 191.047 54.4219 191.32 53.9141C191.594 53.3932 191.887 52.8659 192.199 52.332C192.512 51.7852 192.844 51.2448 193.195 50.7109C193.547 50.1771 193.911 49.6758 194.289 49.207C194.667 48.7513 195.044 48.4258 195.422 48.2305C195.812 48.0221 196.177 47.918 196.516 47.918C196.854 47.918 197.147 47.9896 197.395 48.1328C197.655 48.263 197.863 48.4453 198.02 48.6797C198.189 48.9141 198.312 49.1875 198.391 49.5C198.482 49.8125 198.527 50.151 198.527 50.5156C198.527 50.8151 198.495 51.2188 198.43 51.7266C198.378 52.2214 198.352 52.7422 198.352 53.2891C198.352 53.6016 198.365 53.9141 198.391 54.2266C198.43 54.526 198.488 54.7995 198.566 55.0469C198.658 55.2812 198.788 55.4766 198.957 55.6328C199.126 55.776 199.348 55.8477 199.621 55.8477C199.934 55.8477 200.246 55.763 200.559 55.5938C200.871 55.4115 201.177 55.1771 201.477 54.8906C201.776 54.5911 202.062 54.2656 202.336 53.9141C202.609 53.5495 202.857 53.1914 203.078 52.8398C203.299 52.4753 203.495 52.1302 203.664 51.8047C203.833 51.4661 203.97 51.1862 204.074 50.9648C204.204 50.6654 204.432 50.5156 204.758 50.5156C204.979 50.5156 205.155 50.5938 205.285 50.75C205.415 50.9062 205.48 51.0755 205.48 51.2578C205.48 51.362 205.461 51.4596 205.422 51.5508C205.37 51.6549 205.266 51.8698 205.109 52.1953C204.966 52.5208 204.764 52.8984 204.504 53.3281C204.257 53.7578 203.964 54.207 203.625 54.6758C203.286 55.1445 202.909 55.5807 202.492 55.9844C202.089 56.375 201.646 56.7005 201.164 56.9609C200.695 57.2083 200.201 57.332 199.68 57.332C199.081 57.332 198.599 57.2083 198.234 56.9609C197.87 56.7005 197.583 56.375 197.375 55.9844C197.18 55.5938 197.043 55.1576 196.965 54.6758C196.9 54.194 196.867 53.7253 196.867 53.2695C196.867 53.0352 196.874 52.7878 196.887 52.5273C196.913 52.2539 196.939 51.987 196.965 51.7266C196.991 51.4661 197.01 51.2253 197.023 51.0039C197.049 50.7695 197.062 50.5742 197.062 50.418C197.062 50.0143 197.004 49.7409 196.887 49.5977C196.783 49.4544 196.659 49.3828 196.516 49.3828C196.307 49.3828 196.066 49.5065 195.793 49.7539C195.533 49.9883 195.253 50.3008 194.953 50.6914C194.667 51.082 194.374 51.5247 194.074 52.0195C193.788 52.5013 193.508 52.9831 193.234 53.4648C192.961 53.9466 192.714 54.4089 192.492 54.8516C192.271 55.2812 192.089 55.6393 191.945 55.9258C191.672 56.4727 191.392 56.8372 191.105 57.0195C190.832 57.2148 190.585 57.3125 190.363 57.3125C189.96 57.3125 189.647 57.1562 189.426 56.8438C189.217 56.5182 189.113 56.1276 189.113 55.6719V54.4414C189.113 51.9805 189.113 49.6367 189.113 47.4102C189.126 45.1706 189.159 43.0938 189.211 41.1797C189.276 39.2526 189.374 37.5143 189.504 35.9648C189.647 34.4023 189.855 33.0742 190.129 31.9805C190.402 30.8737 190.747 30.0208 191.164 29.4219C191.594 28.8229 192.128 28.5234 192.766 28.5234C193.312 28.5234 193.775 28.6732 194.152 28.9727C194.53 29.2721 194.836 29.6823 195.07 30.2031C195.305 30.7109 195.474 31.3099 195.578 32C195.682 32.6771 195.734 33.3932 195.734 34.1484C195.734 35.6849 195.591 37.1953 195.305 38.6797C195.031 40.151 194.66 41.5898 194.191 42.9961C193.723 44.4023 193.176 45.776 192.551 47.1172C191.926 48.4453 191.268 49.7409 190.578 51.0039C190.578 51.2383 190.578 51.5182 190.578 51.8438C190.578 52.1693 190.578 52.4948 190.578 52.8203C190.578 53.1458 190.578 53.4518 190.578 53.7383C190.578 54.0247 190.578 54.2526 190.578 54.4219L190.598 55.3398ZM190.598 48.1328C191.145 46.9349 191.639 45.7695 192.082 44.6367C192.538 43.4909 192.922 42.3516 193.234 41.2188C193.56 40.0859 193.814 38.9401 193.996 37.7812C194.178 36.6094 194.27 35.3919 194.27 34.1289C194.27 33.9206 194.257 33.5885 194.23 33.1328C194.217 32.6771 194.159 32.2148 194.055 31.7461C193.964 31.2773 193.814 30.8672 193.605 30.5156C193.41 30.1641 193.13 29.9883 192.766 29.9883C192.479 29.9883 192.232 30.1836 192.023 30.5742C191.815 30.9518 191.633 31.4727 191.477 32.1367C191.32 32.7878 191.19 33.5495 191.086 34.4219C190.982 35.2943 190.897 36.2188 190.832 37.1953C190.767 38.1719 190.715 39.1745 190.676 40.2031C190.65 41.2318 190.63 42.2344 190.617 43.2109C190.604 44.1745 190.598 45.0794 190.598 45.9258C190.598 46.7721 190.598 47.5078 190.598 48.1328Z"
          fill="#F2CB55"
        />
        <g filter="url(#filter0_ii_229_887)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.9117 2.82124C58.0454 2.48236 68.5748 -2.38175 75.7814 2.74702C83.0934 7.9509 79.957 18.6897 82.591 26.7902C84.7796 33.521 91.4127 39.4191 89.9454 46.3066C88.4844 53.165 79.373 55.9618 75.1361 61.7838C69.9394 68.9246 71.1234 80.9005 62.4125 84.14C53.9447 87.2891 45.7965 78.4236 37.057 75.9452C28.4323 73.4994 18.2007 75.1098 11.4148 69.678C4.374 64.0421 -1.04335 55.0754 0.469121 46.658C1.98134 38.2421 14.6927 35.6667 18.8951 28.0481C22.8785 20.8263 17.1013 10.163 23.6226 4.68222C29.9625 -0.645952 40.2864 3.14126 48.9117 2.82124Z"
            fill="url(#paint0_linear_229_887)"
          />
          <path
            d="M74.1071 42.1808C74.9275 47.3317 68.6773 50.5232 64.9859 46.8383V46.8383C63.3351 45.1903 60.8108 44.7928 58.7334 45.8535V45.8535C54.0881 48.2255 49.1213 43.2675 51.4852 38.618V38.618C52.5424 36.5387 52.1405 34.0152 50.4896 32.3672V32.3672C46.7982 28.6823 49.9789 22.4265 55.1312 23.238V23.238C57.4354 23.6008 59.7112 22.4388 60.7684 20.3595V20.3595C63.1323 15.71 70.0648 16.8018 70.8852 21.9528V21.9528C71.2521 24.2564 73.0606 26.0617 75.3648 26.4246V26.4246C80.5172 27.236 81.621 34.1666 76.9757 36.5386V36.5386C74.8983 37.5994 73.7402 39.8772 74.1071 42.1808V42.1808Z"
            fill="url(#paint1_linear_229_887)"
          />
          <path
            d="M63.241 36.2203C63.1532 36.2098 63.0699 36.2434 63.0027 36.3037C62.9372 36.3642 62.8895 36.4515 62.8769 36.5563C62.8645 36.6592 62.8902 36.7554 62.9393 36.8315L63.4067 37.5352L64.0276 36.9623C64.0931 36.9019 64.1408 36.8146 64.1534 36.7097C64.1658 36.6068 64.1401 36.5107 64.091 36.4345C64.0417 36.3602 63.9686 36.3078 63.8793 36.297C63.7915 36.2865 63.7082 36.3201 63.641 36.3804C63.5755 36.4409 63.5277 36.5282 63.5152 36.633C63.5275 36.5301 63.5018 36.4339 63.4527 36.3578C63.4034 36.2835 63.3304 36.231 63.241 36.2203V36.2203Z"
            fill="#3B3D42"
          />
          <path
            d="M70.3276 27.8993C69.9628 27.9293 69.5365 28.0693 69.1221 28.2981C68.8702 28.4356 68.5515 28.6994 68.5419 28.7788C68.5396 28.7986 68.7064 28.7247 68.9162 28.6157C69.9608 28.0532 70.6108 28.0105 71.4046 28.4617C71.6887 28.62 71.8623 28.7584 72.4324 29.2733C73.2702 30.0285 73.5404 30.1952 74.0171 30.2525C74.3286 30.2899 74.4999 30.2602 74.7589 30.1168C74.9417 30.0179 75.171 29.8005 75.1452 29.747C75.1376 29.7293 75.0558 29.7396 74.9588 29.7683C74.6251 29.8624 74.4296 29.8792 74.1217 29.8388C73.8324 29.804 73.6064 29.7265 73.7188 29.7031C73.9703 29.6495 74.0887 29.6033 74.2127 29.5108C74.3573 29.4073 74.4742 29.267 74.4265 29.2613C74.4138 29.2597 74.2795 29.304 74.1309 29.36C73.6914 29.5287 73.31 29.5097 73.0828 29.3078C73.0212 29.2568 72.9731 29.2007 72.9747 29.1874C72.9763 29.1742 73.0458 29.1591 73.1332 29.1561C73.3212 29.1485 73.4813 29.104 73.6311 29.0113C73.7423 28.9441 73.8826 28.7696 73.8576 28.7364C73.8492 28.7253 73.7392 28.7557 73.614 28.8045C73.2862 28.9295 73.1484 28.9499 72.8937 28.9226C72.6803 28.9003 72.6621 28.8914 72.4515 28.7117C72.1186 28.4233 71.7229 28.1744 71.4333 28.0624C71.1524 27.9581 70.6045 27.8755 70.3276 27.8993Z"
            fill="#3B3D42"
          />
          <path
            d="M61.5989 31.2978C61.3056 33.7379 59.5842 35.5376 57.7542 35.3176C55.9241 35.0977 54.6783 32.9413 54.9716 30.5012C55.2649 28.0611 56.9862 26.2613 58.8163 26.4813C60.6464 26.7013 61.8922 28.8577 61.5989 31.2978Z"
            fill="#3B3D42"
          />
          <path
            d="M73.6672 32.7484C73.3739 35.1885 71.6526 36.9882 69.8225 36.7683C67.9925 36.5483 66.7467 34.3919 67.04 31.9518C67.3333 29.5117 69.0546 27.712 70.8847 27.9319C72.7147 28.1519 73.9605 30.3083 73.6672 32.7484Z"
            fill="#3B3D42"
          />
          <path
            d="M71.072 31.0358C70.9437 32.1034 70.0979 32.8796 69.1829 32.7696C68.2678 32.6596 67.6301 31.7051 67.7584 30.6375C67.8867 29.57 68.7325 28.7938 69.6475 28.9037C70.5626 29.0137 71.2003 29.9683 71.072 31.0358Z"
            fill="#E6E4E4"
          />
          <path
            d="M73.1156 32.6821C73.0423 33.2921 72.6119 33.7421 72.1544 33.6871C71.6969 33.6321 71.3855 33.093 71.4588 32.483C71.5321 31.8729 71.9624 31.423 72.42 31.478C72.8775 31.533 73.1889 32.0721 73.1156 32.6821Z"
            fill="#E6E4E4"
          />
          <path
            d="M58.8547 29.5673C58.7264 30.6349 57.8806 31.4111 56.9656 31.3011C56.0505 31.1911 55.4128 30.2366 55.5411 29.169C55.6694 28.1015 56.5152 27.3252 57.4302 27.4352C58.3453 27.5452 58.983 28.4998 58.8547 29.5673Z"
            fill="#E6E4E4"
          />
          <path
            d="M60.8978 31.2136C60.8245 31.8236 60.3942 32.2736 59.9367 32.2186C59.4791 32.1636 59.1677 31.6245 59.241 31.0145C59.3143 30.4044 59.7447 29.9545 60.2022 30.0095C60.6597 30.0645 60.9711 30.6036 60.8978 31.2136Z"
            fill="#E6E4E4"
          />
          <path
            d="M58.1595 26.5408C57.8619 26.5607 57.3457 26.6915 57.0168 26.8305C56.8597 26.8964 56.7256 26.9298 56.6354 26.9247C56.433 26.9099 56.083 26.7423 55.8793 26.5608C55.7796 26.4756 55.6934 26.4034 55.6872 26.4021C55.6403 26.3923 55.6611 26.5121 55.7271 26.6345C55.8193 26.8031 56.0288 26.9722 56.2322 27.0449C56.3108 27.0748 56.3731 27.1047 56.3704 27.1177C56.3602 27.1666 56.0679 27.2555 55.9357 27.2484C55.7257 27.2389 55.446 27.1096 55.2037 26.9099C54.9663 26.718 54.9551 26.7089 54.945 26.7578C54.9214 26.8718 55.2851 27.3038 55.4351 27.3349C55.5915 27.3673 55.5099 27.4149 55.3055 27.4099C54.9581 27.4025 54.6058 27.2615 54.18 26.9559C54.0403 26.859 54.1471 27.1461 54.3306 27.3777C54.5179 27.6068 54.7324 27.7362 55.0357 27.799C55.5015 27.8956 55.7483 27.838 56.8036 27.3875C57.8835 26.9286 58.2681 26.8351 58.8135 26.8938C59.3583 26.9557 59.8988 27.3055 60.4915 27.9855C60.5865 28.0935 60.6706 28.1755 60.6789 28.167C60.7169 28.1409 60.5804 27.8714 60.4297 27.6703C60.151 27.3001 59.7048 26.9358 59.3197 26.7643C59.0274 26.6324 58.4564 26.5242 58.1595 26.5408Z"
            fill="#3B3D42"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.44 39.1614C46.7178 26.2447 46.6345 13.5641 42.2595 11.3002C42.0234 11.1752 41.44 11.0502 40.9678 11.0086C39.44 10.9114 38.4539 11.6336 37.5511 13.5364C35.4956 17.828 34.7456 26.3419 34.6623 46.2308L34.6484 51.0086L34.065 52.1058C33.3845 53.4253 32.4123 54.4669 31.4956 54.8836C30.6484 55.2586 28.5789 55.3419 28.6484 54.9947C28.8289 54.2169 28.815 52.0919 28.6345 50.7447C28.3428 48.6891 27.9261 47.4808 27.1484 46.4669C26.3428 45.3975 25.6067 44.9947 24.4678 44.9947C22.5234 44.9947 21.3567 46.5086 21.2178 49.2308C21.065 52.078 22.2456 54.7725 24.4261 56.5503L25.315 57.2864L25.1067 57.703C24.6761 58.5086 23.3845 59.6614 22.565 59.9253C21.3845 60.3141 19.9956 60.2725 19.0373 59.8003C18.1206 59.3558 17.6623 58.8419 17.1067 57.6614C16.3567 56.0641 16.44 53.4947 17.315 51.6752C17.8428 50.5641 18.5789 49.7586 19.7873 48.9669C20.8011 48.3002 20.8984 48.1614 20.8984 47.3697C20.8984 45.4669 18.6623 45.7725 16.6623 47.9391C15.7595 48.9252 14.7734 50.6197 14.2873 52.078C13.8845 53.2586 13.9123 56.6475 14.3289 57.9808C15.0095 60.1336 16.6206 61.9669 18.44 62.6475C19.1623 62.9253 19.5511 62.9808 20.9123 62.9808H22.5234L23.7178 62.3836C25.1345 61.6891 26.2873 60.6197 27.1067 59.2447L27.6623 58.3141L29.2456 58.2725C30.1206 58.2447 31.0511 58.1475 31.315 58.0503C32.3289 57.703 33.0789 57.3141 33.7595 56.7864C34.1484 56.4947 34.4956 56.2447 34.5373 56.2447C34.5789 56.2447 34.6484 57.2308 34.69 58.4253C34.7734 60.8975 34.9123 61.4808 35.5928 62.1614C35.9817 62.5503 36.1623 62.6336 36.6761 62.6336C37.9539 62.6336 38.7178 61.8697 39.7734 59.5086C40.69 57.4808 42.2456 54.3419 43.0789 52.8419C45.0789 49.2864 46.6484 47.8141 47.1484 49.0364C47.2873 49.3558 47.3011 49.953 47.2039 51.6336C47.0234 54.7447 47.0789 57.3697 47.3567 58.5364C47.8011 60.4808 48.7317 61.8697 49.8984 62.3697C52.815 63.6197 56.0095 61.578 58.8428 56.6475C59.9539 54.7169 60.9261 52.5225 61.0095 51.7864C61.065 51.2308 61.0234 51.0919 60.6622 50.703C60.3567 50.3558 60.1484 50.2447 59.7595 50.2308C59.4817 50.2308 59.1484 50.3002 59.0372 50.4114C58.9122 50.5086 58.3428 51.5641 57.7734 52.7447C56.5095 55.3419 55.4956 56.9114 54.1761 58.2447C53.2039 59.2308 52.3289 59.7169 51.5373 59.7169C50.9817 59.7169 50.3845 59.2169 50.1206 58.5086C49.8984 57.9391 49.8567 57.453 49.8567 55.1336C49.8567 53.6475 49.8984 51.7308 49.9261 50.8975C50.0373 48.1614 49.3567 46.5364 47.7734 45.8141C46.5789 45.2586 45.3289 45.6058 44.0095 46.828C42.6345 48.1197 40.7456 51.1752 38.6345 55.5364C37.8428 57.1753 37.4956 57.7586 37.4123 57.6197C37.3428 57.5086 37.2873 56.078 37.3011 54.4391L37.3289 51.453L37.815 50.4114C40.2595 45.1197 41.3011 42.5919 42.44 39.1614ZM37.5651 31.6614C37.954 21.3558 38.7734 15.7447 40.0929 14.328C40.4679 13.953 40.8845 13.9391 41.3567 14.3141C42.3151 15.0641 42.829 17.5364 42.8429 21.4252C42.8429 27.9114 41.5651 34.1197 38.4956 42.3836C38.0234 43.6614 37.5929 44.7169 37.5373 44.7169C37.3845 44.7169 37.3984 35.9808 37.5651 31.6614ZM24.0788 48.1336C23.8288 48.4391 23.7594 49.6753 23.94 50.5641C24.2316 51.9669 25.4816 54.1614 25.9816 54.1614C26.3844 54.1614 26.1344 51.1475 25.6066 49.4391C25.19 48.1058 24.5511 47.5641 24.0788 48.1336Z"
          fill="url(#paint2_radial_229_887)"
        />
        <defs>
          <filter
            id="filter0_ii_229_887"
            x="-1.78589"
            y="-3.58942"
            width="95.9412"
            height="90.3978"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_229_887"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_229_887"
              result="effect2_innerShadow_229_887"
            />
          </filter>
          <linearGradient
            id="paint0_linear_229_887"
            x1="43.1455"
            y1="28.5943"
            x2="44.5827"
            y2="84.734"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#545860" stop-opacity="0.47" />
            <stop offset="1" stop-color="#373A40" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_229_887"
            x1="64.7213"
            y1="48.4038"
            x2="66.4276"
            y2="19.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00140872" stop-color="#FAB005" />
            <stop offset="1" stop-color="#F2CB56" />
          </linearGradient>
          <radialGradient
            id="paint2_radial_229_887"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(39.1651 -6.32694) rotate(90.9094) scale(77.981 70.5816)"
          >
            <stop stop-color="#F8CCDB" />
            <stop offset="1" stop-color="#E8417C" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MainLogo;
