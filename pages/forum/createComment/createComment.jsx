import { FlatList, ImageBackground, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import styles from '../createMessage/createMessage_style';

function createComment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // 获取评论
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data.comments); // 假设后端返回的数据结构是{ comments: [] }
        } else {
          console.error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Failed to fetch comments', error);
      }
    };

    fetchComments();
  }, []); // 空依赖数组意味着这个effect只在组件挂载时运行一次

  // 发布评论
  const postComment = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: newComment }),
      });

      if (response.ok) {
        const newCommentFromResponse = await response.json(); // 假设后端返回新增的评论
        setComments([...comments, newCommentFromResponse]);
        setNewComment('');
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Failed to post comment', error);
    }
  };

  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ImageBackground
          source={require('../../../assets/forum/background.png')}
          style={styles.bk}
        >
          <ImageBackground>
            <FlatList
              data={comments}
              renderItem={({ item }) => <Text>{item.comment}</Text>} // 假设每个评论对象有一个comment属性
              keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
              value={newComment}
              onChangeText={setNewComment}
              placeholder="写评论..."
            />
            <Button title="发布评论" onPress={postComment} />
          </ImageBackground>
        </ImageBackground>
      </View>
    </View>
  );
}
