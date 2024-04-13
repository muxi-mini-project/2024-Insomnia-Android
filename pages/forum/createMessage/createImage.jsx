import selectImage from '../../api/qiniu/Upqiniu'
import { useState } from 'react'
import uploadImageToQiniu from '../../api/qiniu/uploadImageToQiniu'
import { Button, Image, View } from 'react-native'

export default function createImage() {
   const [imageUrl, setImageUrl] = useState(null)

   const handleSelectAndUploadImage = async () => {
      // 假设这个函数触发图片选择和上传逻辑
      const selectedImageUri = await selectImage() // 选择图片并获取本地URI
      const uploadedImageUrl = await uploadImageToQiniu(selectedImageUri) // 上传图片并获取在线URL
      setImageUrl(uploadedImageUrl)
   }
   return(
      <View>
         <Button title={}></Button>
         {imageUrl&&<Image source={{uri:imageUrl}}/>}
      </View>
   )
}
