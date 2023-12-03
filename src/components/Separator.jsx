import React from 'react'

const Separator = () => {
    return (
        <div class="loader">
            <style>
                {
                    `.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 70%;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0,0,0,0.2);
  position: relative;
  margin: 30px 0px
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 4s ease-in-out infinite;
  ;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}`
                }
            </style>
        </div>
    )
}

export default Separator