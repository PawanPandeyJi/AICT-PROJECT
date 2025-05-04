const getAPIHealth = async (req, res) => {
    try {
        res.status(200).json({ message: "Health API is working fine!!" })
    } catch (error) {
        console.log("getAPIHealth error", error);
    }
}

export default getAPIHealth