import type { NextPage } from "next"

import { Microstore } from "components/composite/Microstore"
import MicrostoreContainer from "components/composite/MicrostoreContainer"
import SkeletonLoader from "components/composite/SkeletonLoader"
import { useDataFromUrl } from "components/hooks/useDataFromUrl"
import { useSettings } from "components/hooks/useSettings"

const Home: NextPage = () => {
  const { settings, isLoading, retryOnError } = useSettings()
  const { skus, couponCode, description, title } = useDataFromUrl()

  if (retryOnError) {
    return <div>Connectivity error. Retry!</div>
  }

  if (isLoading || !settings) {
    return <SkeletonLoader />
  }

  return (
    <>
      <MicrostoreContainer settings={{ ...settings }} couponCode={couponCode}>
        <Microstore
          skus={skus}
          couponCode={couponCode}
          title={title}
          description={description}
        />
      </MicrostoreContainer>
    </>
  )
}

export default Home
