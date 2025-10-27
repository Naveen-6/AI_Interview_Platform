import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(userid: string): Promise<Interview[] | null> {
  if (!userid) return []; // ✅ prevent querying with undefined userid

  const interviews = await db
    .collection("interviews")
    .where("userid", "==", userid)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
  const { userid, limit = 20 } = params;

  let ref = db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)

  // ✅ Only apply this filter if userid exists
  if (userid) {
    ref = ref.where("userid", "!=", userid);
  }

  const interviews = await ref.limit(limit).get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interviews = await db.collection("interviews").doc(id).get();
  return interviews.data() as Interview | null;
}

export async function getFeedbackByInterviewId(params: GetFeedbackByInterviewIdParams): Promise<Feedback | null> {
  const { interviewId, userid } = params;

  if (!userid) return null; // ✅ safety check

  const feedback = await db
    .collection("feedback")
    .where("interviewId", "==", interviewId)
    .where("userid", "==", userid)
    .limit(1)
    .get();

  if (feedback.empty) return null;

  const feedbackDoc = feedback.docs[0];
  return {
    id: feedbackDoc.id,
    ...feedbackDoc.data(),
  } as Feedback;
}
