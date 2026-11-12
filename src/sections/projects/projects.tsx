import { t } from "../../i18n/i18n";

// utils
import { getProjectsColumns, ProjectsList } from "./utils";

// types
import type { Project, ProyectsProps } from "./types";

// components
import {
  DataTable,
  type DataTableColumn,
} from "../../complex-components/data-table";
import IconComponent from "../../components/icon-component/icon-component";
import Avatar from "../../components/avatar/avatar";

function Projects({ headline, subheadline }: ProyectsProps) {
  const { columns } = getProjectsColumns(t);

  const columnsWithActions: DataTableColumn<Project>[] = [
    {
      key: "logo",
      title: t("projects.row.logo"),
      align: "center",
      sortable: false,
      minWidth: 150,
      render: (_, row) => (
        <Avatar src={row.logo} size="xs" className="rounded-lg" />
      ),
    },
    ...columns,
    {
      key: "technologies",
      title: t("projects.row.technologies"),
      align: "center",
      sortable: false,
      render: (_, row) => (
        <div className="grid grid-cols-3 items-center justify-center gap-3">
          {row.technologies.map((skill, index) => (
            <img
              key={`img-icon-${+index}`}
              src={skill}
              alt="Icon"
              className="h-5 w-5"
            />
          ))}
        </div>
      ),
    },
    {
      key: "actions",
      title: t("general.actions"),
      align: "center",
      sortable: false,
      render: (_, project) => (
        <div className="flex items-center justify-center gap-3">
          <IconComponent
            iconName="GlobeAltIcon"
            color="neutral_100"
            variant="outline"
            size={20}
            onClick={() => window.open(`${project.url}`, "_blank")}
          />
        </div>
      ),
    },
  ];

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <div id="#proyects" className="w-full p-10 lg:px-32 lg:py-12">
      <p className="text-slate-200 font-medium text-3xl mb-5">
        {headline}
        <span className="text-cyan-400 font-medium text-3xl pl-2">
          {subheadline}
        </span>
      </p>
      <div className="w-full">
        <DataTable<Project>
          searchPlaceholder={t("general.search")}
          icon={
            <IconComponent
              iconName="Square3Stack3DIcon"
              color="purple_500"
              size={18}
            />
          }
          data={ProjectsList}
          rowKey={(row) => row.url}
          searchable
          pagination
          pageSize={5}
          columns={columnsWithActions}
        />
      </div>
    </div>
  );
}

export default Projects;
