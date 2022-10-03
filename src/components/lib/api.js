const FIREBASE_DOMAIN = "https://react-http-987b8-default-rtdb.firebaseio.com";

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Could not create quote");
  }
  return null;
}

export async function getQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();
  const transformedQuotes = [];
  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quoteObj);
  }
  return transformedQuotes;
}
export async function getAQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();
  if (!response.ok) {
    console.log("error in getting single quote");
    throw new Error(data.message || "something went wrong");
  }
  return data;
}

export async function addAComment(comment) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${comment.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(comment.comment),
      header: {
        contentType: "application/json",
      },
    }
  );
  const responseData = await response.json();
  if (!response.ok) {
    console.log("error in fetching comments-api");
    throw new Error(responseData.message || "something went wrong");
  }
  return { commentID: responseData.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();
  if (!response.ok) {
    console.log("error in fetching getting comments - api");
    throw new Error(data.message || "something went wrong");
  }
  const transformedComments = [];
  for (const key in data) {

    const obj = { 
      commentId: key, 
      ...data[key] 
    };
    transformedComments.push(obj);
  }



  return transformedComments;
}
