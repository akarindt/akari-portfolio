import projects, { type ProjectsType } from '@utils/projects';
import icons from '@utils/preload-image';
import React, { useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(null);
    const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

    const handleDoubleClick = (project: ProjectsType): void => {
        window.open(project.link, '_blank');
    };

    return (
        <div>
            <div className="flex flex-row items-start flex-wrap gap-1">
                {projects.map((project) => (
                    <div
                        onClick={() => setSelectedProject(project)}
                        onDoubleClick={() => handleDoubleClick(project)}
                        key={project.id}
                        className={`relative flex flex-col items-center ${
                            selectedProject === project ? 'bg-blue-50' : ''
                        } hover:bg-blue-50 p-0.5`}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                    >
                        <div className="w-[60px] h-[60px]">
                            <img className="w-full h-full" src={icons.FolderOpenIcon} alt="Projects Icon" />
                        </div>
                        <div className="w-[90px] text-center wrap-break-word text-sm" key={project.id}>
                            {project.title}
                        </div>
                        {hoveredProjectId === project.id && (
                            <div
                                className={clsx(
                                    'absolute',
                                    'z-10',
                                    'top-full',
                                    'mt-2',
                                    'left-1/2',
                                    '-translate-x-1/12',
                                    'px-2 py-1',
                                    'bg-neutral-100',
                                    'text-black',
                                    'border',
                                    'text-xs',
                                    'break-words',
                                    'pointer-events-none',
                                    'w-[250px]',
                                    'flex',
                                    'flex-col',
                                    'items-start'
                                )}
                            >
                                <span>Description: {project.description}</span>
                                <span>Created at: {dayjs(project.createdAt).format('YYYY-MM-DD')}</span>
                                <span>Techs: {project.techs.join(', ')}</span>
                                <span>Tags: {project.tags.join(', ')}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
