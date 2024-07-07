import React, { useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"

const Loading = () => {
   
      let [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading d-flex justify-content-center mt-20">
    

    <FadeLoader
      color='blue'
      loading={loading}
      css=''
      size={350}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loading