// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath: string;
    username: string;
    replyTitle: string;
    likes: number;
}

interface CommentProps {
    ImagePath: string;
    username: string;
    commentTitle: string;
    likes: number;
    replies: ({
    username: string;
    userImagePath: string;
    replyText: string;
    likes: number;
  } | undefined)[];
}
export type { ReplyProps, CommentProps };
