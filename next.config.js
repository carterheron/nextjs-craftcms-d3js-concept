module.exports = {
    images: {
        loader: "imgix",
        path:'',
        domains: ['s3.us-west-1.amazonaws.com'], //Needs to refer to the AWS S3 bucket
    },
    env: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }
}
