import { useEffect, useState } from "react";

function SearchHistory({ setWeather }) {
  const [history, setHistory] = useState([]);
