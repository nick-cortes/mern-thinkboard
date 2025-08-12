export default function formatDate(date) {
    return date.toLcaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};
