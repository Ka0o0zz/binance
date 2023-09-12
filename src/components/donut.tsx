import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export const DonutCharts = () => (
  <DonutChart
    className="mt-6 w-full"
    data={cities}
    category="sales"
    index="name"
    valueFormatter={valueFormatter}
    colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
  />
);
