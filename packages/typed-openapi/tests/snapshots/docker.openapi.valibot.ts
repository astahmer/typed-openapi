
  import * as v from "valibot";

// <Schemas>
export type Port = v.InferOutput<typeof Port>;
export const Port = v.object({ IP: v.optional(v.string()), PrivatePort: v.pipe(v.number(), v.integer()), PublicPort: v.optional(v.pipe(v.number(), v.integer())), Type: v.picklist(["tcp", "udp", "sctp"]) });

export type MountPoint = v.InferOutput<typeof MountPoint>;
export const MountPoint = v.partial(v.object({ Type: v.picklist(["bind", "volume", "tmpfs", "npipe", "cluster"]), Name: v.string(), Source: v.string(), Destination: v.string(), Driver: v.string(), Mode: v.string(), RW: v.boolean(), Propagation: v.string() }));

export type DeviceMapping = v.InferOutput<typeof DeviceMapping>;
export const DeviceMapping = v.partial(v.object({ PathOnHost: v.string(), PathInContainer: v.string(), CgroupPermissions: v.string() }));

export type DeviceRequest = v.InferOutput<typeof DeviceRequest>;
export const DeviceRequest = v.partial(v.object({ Driver: v.string(), Count: v.pipe(v.number(), v.integer()), DeviceIDs: v.array(v.string()), Capabilities: v.array(v.array(v.string())), Options: v.record(v.string(), v.string()) }));

export type ThrottleDevice = v.InferOutput<typeof ThrottleDevice>;
export const ThrottleDevice = v.partial(v.object({ Path: v.string(), Rate: v.pipe(v.number(), v.integer(), v.minValue(0)) }));

export type Mount = v.InferOutput<typeof Mount>;
export const Mount = v.partial(v.object({ Target: v.string(), Source: v.string(), Type: v.picklist(["bind", "volume", "tmpfs", "npipe", "cluster"]), ReadOnly: v.boolean(), Consistency: v.string(), BindOptions: v.partial(v.object({ Propagation: v.picklist(["private", "rprivate", "shared", "rshared", "slave", "rslave"]), NonRecursive: v.optional(v.boolean(), false), CreateMountpoint: v.optional(v.boolean(), false) })), VolumeOptions: v.partial(v.object({ NoCopy: v.optional(v.boolean(), false), Labels: v.record(v.string(), v.string()), DriverConfig: v.partial(v.object({ Name: v.string(), Options: v.record(v.string(), v.string()) })) })), TmpfsOptions: v.partial(v.object({ SizeBytes: v.pipe(v.number(), v.integer()), Mode: v.pipe(v.number(), v.integer()) })) }));

export type RestartPolicy = v.InferOutput<typeof RestartPolicy>;
export const RestartPolicy = v.partial(v.object({ Name: v.picklist(["", "no", "always", "unless-stopped", "on-failure"]), MaximumRetryCount: v.pipe(v.number(), v.integer()) }));

export type Resources = v.InferOutput<typeof Resources>;
export const Resources = v.partial(v.object({ CpuShares: v.pipe(v.number(), v.integer()), Memory: v.optional(v.pipe(v.number(), v.integer()), 0), CgroupParent: v.string(), BlkioWeight: v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(1000)), BlkioWeightDevice: v.array(v.partial(v.object({ Path: v.string(), Weight: v.pipe(v.number(), v.integer(), v.minValue(0)) }))), BlkioDeviceReadBps: v.array(ThrottleDevice), BlkioDeviceWriteBps: v.array(ThrottleDevice), BlkioDeviceReadIOps: v.array(ThrottleDevice), BlkioDeviceWriteIOps: v.array(ThrottleDevice), CpuPeriod: v.pipe(v.number(), v.integer()), CpuQuota: v.pipe(v.number(), v.integer()), CpuRealtimePeriod: v.pipe(v.number(), v.integer()), CpuRealtimeRuntime: v.pipe(v.number(), v.integer()), CpusetCpus: v.string(), CpusetMems: v.string(), Devices: v.array(DeviceMapping), DeviceCgroupRules: v.array(v.string()), DeviceRequests: v.array(DeviceRequest), KernelMemoryTCP: v.pipe(v.number(), v.integer()), MemoryReservation: v.pipe(v.number(), v.integer()), MemorySwap: v.pipe(v.number(), v.integer()), MemorySwappiness: v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(100)), NanoCpus: v.pipe(v.number(), v.integer()), OomKillDisable: v.boolean(), Init: v.nullable(v.boolean()), PidsLimit: v.nullable(v.pipe(v.number(), v.integer())), Ulimits: v.array(v.partial(v.object({ Name: v.string(), Soft: v.pipe(v.number(), v.integer()), Hard: v.pipe(v.number(), v.integer()) }))), CpuCount: v.pipe(v.number(), v.integer()), CpuPercent: v.pipe(v.number(), v.integer()), IOMaximumIOps: v.pipe(v.number(), v.integer()), IOMaximumBandwidth: v.pipe(v.number(), v.integer()) }));

export type Limit = v.InferOutput<typeof Limit>;
export const Limit = v.partial(v.object({ NanoCPUs: v.pipe(v.number(), v.integer()), MemoryBytes: v.pipe(v.number(), v.integer()), Pids: v.optional(v.pipe(v.number(), v.integer()), 0) }));

export type GenericResources = v.InferOutput<typeof GenericResources>;
export const GenericResources = v.array(v.partial(v.object({ NamedResourceSpec: v.partial(v.object({ Kind: v.string(), Value: v.string() })), DiscreteResourceSpec: v.partial(v.object({ Kind: v.string(), Value: v.pipe(v.number(), v.integer()) })) })));

export type ResourceObject = v.InferOutput<typeof ResourceObject>;
export const ResourceObject = v.partial(v.object({ NanoCPUs: v.pipe(v.number(), v.integer()), MemoryBytes: v.pipe(v.number(), v.integer()), GenericResources: GenericResources }));

export type HealthConfig = v.InferOutput<typeof HealthConfig>;
export const HealthConfig = v.partial(v.object({ Test: v.array(v.string()), Interval: v.pipe(v.number(), v.integer()), Timeout: v.pipe(v.number(), v.integer()), Retries: v.pipe(v.number(), v.integer()), StartPeriod: v.pipe(v.number(), v.integer()) }));

export type HealthcheckResult = v.InferOutput<typeof HealthcheckResult>;
export const HealthcheckResult = v.nullable(v.partial(v.object({ Start: v.string(), End: v.string(), ExitCode: v.pipe(v.number(), v.integer()), Output: v.string() })));

export type Health = v.InferOutput<typeof Health>;
export const Health = v.nullable(v.partial(v.object({ Status: v.picklist(["none", "starting", "healthy", "unhealthy"]), FailingStreak: v.pipe(v.number(), v.integer()), Log: v.array(HealthcheckResult) })));

export type PortBinding = v.InferOutput<typeof PortBinding>;
export const PortBinding = v.partial(v.object({ HostIp: v.string(), HostPort: v.string() }));

export type PortMap = v.InferOutput<typeof PortMap>;
export const PortMap = v.record(v.string(), v.nullable(v.array(PortBinding)));

export type HostConfig = v.InferOutput<typeof HostConfig>;
export const HostConfig = v.intersect([Resources, v.partial(v.object({ Binds: v.array(v.string()), ContainerIDFile: v.string(), LogConfig: v.partial(v.object({ Type: v.picklist(["json-file", "syslog", "journald", "gelf", "fluentd", "awslogs", "splunk", "etwlogs", "none"]), Config: v.record(v.string(), v.string()) })), NetworkMode: v.string(), PortBindings: PortMap, RestartPolicy: RestartPolicy, AutoRemove: v.boolean(), VolumeDriver: v.string(), VolumesFrom: v.array(v.string()), Mounts: v.array(Mount), ConsoleSize: v.nullable(v.pipe(v.array(v.pipe(v.number(), v.integer(), v.minValue(0))), v.minLength(2), v.maxLength(2))), Annotations: v.record(v.string(), v.string()), CapAdd: v.array(v.string()), CapDrop: v.array(v.string()), CgroupnsMode: v.picklist(["private", "host"]), Dns: v.array(v.string()), DnsOptions: v.array(v.string()), DnsSearch: v.array(v.string()), ExtraHosts: v.array(v.string()), GroupAdd: v.array(v.string()), IpcMode: v.string(), Cgroup: v.string(), Links: v.array(v.string()), OomScoreAdj: v.pipe(v.number(), v.integer()), PidMode: v.string(), Privileged: v.boolean(), PublishAllPorts: v.boolean(), ReadonlyRootfs: v.boolean(), SecurityOpt: v.array(v.string()), StorageOpt: v.record(v.string(), v.string()), Tmpfs: v.record(v.string(), v.string()), UTSMode: v.string(), UsernsMode: v.string(), ShmSize: v.pipe(v.number(), v.integer(), v.minValue(0)), Sysctls: v.record(v.string(), v.string()), Runtime: v.string(), Isolation: v.picklist(["default", "process", "hyperv"]), MaskedPaths: v.array(v.string()), ReadonlyPaths: v.array(v.string()) }))]);

export type ContainerConfig = v.InferOutput<typeof ContainerConfig>;
export const ContainerConfig = v.partial(v.object({ Hostname: v.string(), Domainname: v.string(), User: v.string(), AttachStdin: v.optional(v.boolean(), false), AttachStdout: v.optional(v.boolean(), true), AttachStderr: v.optional(v.boolean(), true), ExposedPorts: v.nullable(v.record(v.string(), v.partial(v.object({  })))), Tty: v.optional(v.boolean(), false), OpenStdin: v.optional(v.boolean(), false), StdinOnce: v.optional(v.boolean(), false), Env: v.array(v.string()), Cmd: v.array(v.string()), Healthcheck: HealthConfig, ArgsEscaped: v.optional(v.nullable(v.boolean()), false), Image: v.string(), Volumes: v.record(v.string(), v.partial(v.object({  }))), WorkingDir: v.string(), Entrypoint: v.array(v.string()), NetworkDisabled: v.nullable(v.boolean()), MacAddress: v.nullable(v.string()), OnBuild: v.nullable(v.array(v.string())), Labels: v.record(v.string(), v.string()), StopSignal: v.nullable(v.string()), StopTimeout: v.nullable(v.pipe(v.number(), v.integer())), Shell: v.nullable(v.array(v.string())) }));

export type EndpointIPAMConfig = v.InferOutput<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = v.nullable(v.partial(v.object({ IPv4Address: v.string(), IPv6Address: v.string(), LinkLocalIPs: v.array(v.string()) })));

export type EndpointSettings = v.InferOutput<typeof EndpointSettings>;
export const EndpointSettings = v.partial(v.object({ IPAMConfig: EndpointIPAMConfig, Links: v.array(v.string()), Aliases: v.array(v.string()), NetworkID: v.string(), EndpointID: v.string(), Gateway: v.string(), IPAddress: v.string(), IPPrefixLen: v.pipe(v.number(), v.integer()), IPv6Gateway: v.string(), GlobalIPv6Address: v.string(), GlobalIPv6PrefixLen: v.pipe(v.number(), v.integer()), MacAddress: v.string(), DriverOpts: v.nullable(v.record(v.string(), v.string())) }));

export type NetworkingConfig = v.InferOutput<typeof NetworkingConfig>;
export const NetworkingConfig = v.partial(v.object({ EndpointsConfig: v.record(v.string(), EndpointSettings) }));

export type Address = v.InferOutput<typeof Address>;
export const Address = v.partial(v.object({ Addr: v.string(), PrefixLen: v.pipe(v.number(), v.integer()) }));

export type NetworkSettings = v.InferOutput<typeof NetworkSettings>;
export const NetworkSettings = v.partial(v.object({ Bridge: v.string(), SandboxID: v.string(), HairpinMode: v.boolean(), LinkLocalIPv6Address: v.string(), LinkLocalIPv6PrefixLen: v.pipe(v.number(), v.integer()), Ports: PortMap, SandboxKey: v.string(), SecondaryIPAddresses: v.nullable(v.array(Address)), SecondaryIPv6Addresses: v.nullable(v.array(Address)), EndpointID: v.string(), Gateway: v.string(), GlobalIPv6Address: v.string(), GlobalIPv6PrefixLen: v.pipe(v.number(), v.integer()), IPAddress: v.string(), IPPrefixLen: v.pipe(v.number(), v.integer()), IPv6Gateway: v.string(), MacAddress: v.string(), Networks: v.record(v.string(), EndpointSettings) }));

export type GraphDriverData = v.InferOutput<typeof GraphDriverData>;
export const GraphDriverData = v.object({ Name: v.string(), Data: v.record(v.string(), v.string()) });

export type ChangeType = v.InferOutput<typeof ChangeType>;
export const ChangeType = v.union([v.literal(0), v.literal(1), v.literal(2)]);

export type FilesystemChange = v.InferOutput<typeof FilesystemChange>;
export const FilesystemChange = v.object({ Path: v.string(), Kind: ChangeType });

export type ImageInspect = v.InferOutput<typeof ImageInspect>;
export const ImageInspect = v.partial(v.object({ Id: v.string(), RepoTags: v.array(v.string()), RepoDigests: v.array(v.string()), Parent: v.string(), Comment: v.string(), Created: v.string(), Container: v.string(), ContainerConfig: ContainerConfig, DockerVersion: v.string(), Author: v.string(), Config: ContainerConfig, Architecture: v.string(), Variant: v.nullable(v.string()), Os: v.string(), OsVersion: v.nullable(v.string()), Size: v.pipe(v.number(), v.integer()), VirtualSize: v.pipe(v.number(), v.integer()), GraphDriver: GraphDriverData, RootFS: v.object({ Type: v.string(), Layers: v.optional(v.array(v.string())) }), Metadata: v.partial(v.object({ LastTagTime: v.nullable(v.string()) })) }));

export type ImageSummary = v.InferOutput<typeof ImageSummary>;
export const ImageSummary = v.object({ Id: v.string(), ParentId: v.string(), RepoTags: v.array(v.string()), RepoDigests: v.array(v.string()), Created: v.pipe(v.number(), v.integer()), Size: v.pipe(v.number(), v.integer()), SharedSize: v.pipe(v.number(), v.integer()), VirtualSize: v.optional(v.pipe(v.number(), v.integer())), Labels: v.record(v.string(), v.string()), Containers: v.pipe(v.number(), v.integer()) });

export type AuthConfig = v.InferOutput<typeof AuthConfig>;
export const AuthConfig = v.partial(v.object({ username: v.string(), password: v.string(), email: v.string(), serveraddress: v.string() }));

export type ProcessConfig = v.InferOutput<typeof ProcessConfig>;
export const ProcessConfig = v.partial(v.object({ privileged: v.boolean(), user: v.string(), tty: v.boolean(), entrypoint: v.string(), arguments: v.array(v.string()) }));

export type ObjectVersion = v.InferOutput<typeof ObjectVersion>;
export const ObjectVersion = v.partial(v.object({ Index: v.pipe(v.number(), v.integer()) }));

export type Topology = v.InferOutput<typeof Topology>;
export const Topology = v.record(v.string(), v.string());

export type ClusterVolumeSpec = v.InferOutput<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = v.partial(v.object({ Group: v.string(), AccessMode: v.partial(v.object({ Scope: v.optional(v.picklist(["single", "multi"]), "single"), Sharing: v.optional(v.picklist(["none", "readonly", "onewriter", "all"]), "none"), MountVolume: v.partial(v.object({  })), Secrets: v.array(v.partial(v.object({ Key: v.string(), Secret: v.string() }))), AccessibilityRequirements: v.partial(v.object({ Requisite: v.array(Topology), Preferred: v.array(Topology) })), CapacityRange: v.partial(v.object({ RequiredBytes: v.pipe(v.number(), v.integer()), LimitBytes: v.pipe(v.number(), v.integer()) })), Availability: v.optional(v.picklist(["active", "pause", "drain"]), "active") })) }));

export type ClusterVolume = v.InferOutput<typeof ClusterVolume>;
export const ClusterVolume = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: ClusterVolumeSpec, Info: v.partial(v.object({ CapacityBytes: v.pipe(v.number(), v.integer()), VolumeContext: v.record(v.string(), v.string()), VolumeID: v.string(), AccessibleTopology: v.array(Topology) })), PublishStatus: v.array(v.partial(v.object({ NodeID: v.string(), State: v.picklist(["pending-publish", "published", "pending-node-unpublish", "pending-controller-unpublish"]), PublishContext: v.record(v.string(), v.string()) }))) }));

export type Volume = v.InferOutput<typeof Volume>;
export const Volume = v.object({ Name: v.string(), Driver: v.string(), Mountpoint: v.string(), CreatedAt: v.optional(v.string()), Status: v.optional(v.record(v.string(), v.partial(v.object({  })))), Labels: v.record(v.string(), v.string()), Scope: v.optional(v.picklist(["local", "global"]), "local"), ClusterVolume: v.optional(ClusterVolume), Options: v.record(v.string(), v.string()), UsageData: v.optional(v.nullable(v.object({ Size: v.optional(v.pipe(v.number(), v.integer()), -1), RefCount: v.optional(v.pipe(v.number(), v.integer()), -1) }))) });

export type VolumeCreateOptions = v.InferOutput<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = v.partial(v.object({ Name: v.string(), Driver: v.optional(v.string(), "local"), DriverOpts: v.record(v.string(), v.string()), Labels: v.record(v.string(), v.string()), ClusterVolumeSpec: ClusterVolumeSpec }));

export type VolumeListResponse = v.InferOutput<typeof VolumeListResponse>;
export const VolumeListResponse = v.partial(v.object({ Volumes: v.array(Volume), Warnings: v.array(v.string()) }));

export type IPAMConfig = v.InferOutput<typeof IPAMConfig>;
export const IPAMConfig = v.partial(v.object({ Subnet: v.string(), IPRange: v.string(), Gateway: v.string(), AuxiliaryAddresses: v.record(v.string(), v.string()) }));

export type IPAM = v.InferOutput<typeof IPAM>;
export const IPAM = v.partial(v.object({ Driver: v.optional(v.string(), "default"), Config: v.array(IPAMConfig), Options: v.record(v.string(), v.string()) }));

export type NetworkContainer = v.InferOutput<typeof NetworkContainer>;
export const NetworkContainer = v.partial(v.object({ Name: v.string(), EndpointID: v.string(), MacAddress: v.string(), IPv4Address: v.string(), IPv6Address: v.string() }));

export type Network = v.InferOutput<typeof Network>;
export const Network = v.partial(v.object({ Name: v.string(), Id: v.string(), Created: v.string(), Scope: v.string(), Driver: v.string(), EnableIPv6: v.boolean(), IPAM: IPAM, Internal: v.boolean(), Attachable: v.boolean(), Ingress: v.boolean(), Containers: v.record(v.string(), NetworkContainer), Options: v.record(v.string(), v.string()), Labels: v.record(v.string(), v.string()) }));

export type ErrorDetail = v.InferOutput<typeof ErrorDetail>;
export const ErrorDetail = v.partial(v.object({ code: v.pipe(v.number(), v.integer()), message: v.string() }));

export type ProgressDetail = v.InferOutput<typeof ProgressDetail>;
export const ProgressDetail = v.partial(v.object({ current: v.pipe(v.number(), v.integer()), total: v.pipe(v.number(), v.integer()) }));

export type ImageID = v.InferOutput<typeof ImageID>;
export const ImageID = v.partial(v.object({ ID: v.string() }));

export type BuildInfo = v.InferOutput<typeof BuildInfo>;
export const BuildInfo = v.partial(v.object({ id: v.string(), stream: v.string(), error: v.string(), errorDetail: ErrorDetail, status: v.string(), progress: v.string(), progressDetail: ProgressDetail, aux: ImageID }));

export type BuildCache = v.InferOutput<typeof BuildCache>;
export const BuildCache = v.partial(v.object({ ID: v.string(), Parent: v.nullable(v.string()), Parents: v.nullable(v.array(v.string())), Type: v.picklist(["internal", "frontend", "source.local", "source.git.checkout", "exec.cachemount", "regular"]), Description: v.string(), InUse: v.boolean(), Shared: v.boolean(), Size: v.pipe(v.number(), v.integer()), CreatedAt: v.string(), LastUsedAt: v.nullable(v.string()), UsageCount: v.pipe(v.number(), v.integer()) }));

export type CreateImageInfo = v.InferOutput<typeof CreateImageInfo>;
export const CreateImageInfo = v.partial(v.object({ id: v.string(), error: v.string(), errorDetail: ErrorDetail, status: v.string(), progress: v.string(), progressDetail: ProgressDetail }));

export type PushImageInfo = v.InferOutput<typeof PushImageInfo>;
export const PushImageInfo = v.partial(v.object({ error: v.string(), status: v.string(), progress: v.string(), progressDetail: ProgressDetail }));

export type ErrorResponse = v.InferOutput<typeof ErrorResponse>;
export const ErrorResponse = v.object({ message: v.string() });

export type IdResponse = v.InferOutput<typeof IdResponse>;
export const IdResponse = v.object({ Id: v.string() });

export type PluginMount = v.InferOutput<typeof PluginMount>;
export const PluginMount = v.object({ Name: v.string(), Description: v.string(), Settable: v.array(v.string()), Source: v.string(), Destination: v.string(), Type: v.string(), Options: v.array(v.string()) });

export type PluginDevice = v.InferOutput<typeof PluginDevice>;
export const PluginDevice = v.object({ Name: v.string(), Description: v.string(), Settable: v.array(v.string()), Path: v.string() });

export type PluginEnv = v.InferOutput<typeof PluginEnv>;
export const PluginEnv = v.object({ Name: v.string(), Description: v.string(), Settable: v.array(v.string()), Value: v.string() });

export type PluginInterfaceType = v.InferOutput<typeof PluginInterfaceType>;
export const PluginInterfaceType = v.object({ Prefix: v.string(), Capability: v.string(), Version: v.string() });

export type PluginPrivilege = v.InferOutput<typeof PluginPrivilege>;
export const PluginPrivilege = v.partial(v.object({ Name: v.string(), Description: v.string(), Value: v.array(v.string()) }));

export type Plugin = v.InferOutput<typeof Plugin>;
export const Plugin = v.object({ Id: v.optional(v.string()), Name: v.string(), Enabled: v.boolean(), Settings: v.object({ Mounts: v.array(PluginMount), Env: v.array(v.string()), Args: v.array(v.string()), Devices: v.array(PluginDevice) }), PluginReference: v.optional(v.string()), Config: v.object({ DockerVersion: v.optional(v.string()), Description: v.string(), Documentation: v.string(), Interface: v.object({ Types: v.array(PluginInterfaceType), Socket: v.string(), ProtocolScheme: v.optional(v.picklist(["", "moby.plugins.http/v1"])) }), Entrypoint: v.array(v.string()), WorkDir: v.string(), User: v.optional(v.partial(v.object({ UID: v.pipe(v.number(), v.integer()), GID: v.pipe(v.number(), v.integer()) }))), Network: v.object({ Type: v.string() }), Linux: v.object({ Capabilities: v.array(v.string()), AllowAllDevices: v.boolean(), Devices: v.array(PluginDevice) }), PropagatedMount: v.string(), IpcHost: v.boolean(), PidHost: v.boolean(), Mounts: v.array(PluginMount), Env: v.array(PluginEnv), Args: v.object({ Name: v.string(), Description: v.string(), Settable: v.array(v.string()), Value: v.array(v.string()) }), rootfs: v.optional(v.partial(v.object({ type: v.string(), diff_ids: v.array(v.string()) }))) }) });

export type NodeSpec = v.InferOutput<typeof NodeSpec>;
export const NodeSpec = v.partial(v.object({ Name: v.string(), Labels: v.record(v.string(), v.string()), Role: v.picklist(["worker", "manager"]), Availability: v.picklist(["active", "pause", "drain"]) }));

export type Platform = v.InferOutput<typeof Platform>;
export const Platform = v.partial(v.object({ Architecture: v.string(), OS: v.string() }));

export type EngineDescription = v.InferOutput<typeof EngineDescription>;
export const EngineDescription = v.partial(v.object({ EngineVersion: v.string(), Labels: v.record(v.string(), v.string()), Plugins: v.array(v.partial(v.object({ Type: v.string(), Name: v.string() }))) }));

export type TLSInfo = v.InferOutput<typeof TLSInfo>;
export const TLSInfo = v.partial(v.object({ TrustRoot: v.string(), CertIssuerSubject: v.string(), CertIssuerPublicKey: v.string() }));

export type NodeDescription = v.InferOutput<typeof NodeDescription>;
export const NodeDescription = v.partial(v.object({ Hostname: v.string(), Platform: Platform, Resources: ResourceObject, Engine: EngineDescription, TLSInfo: TLSInfo }));

export type NodeState = v.InferOutput<typeof NodeState>;
export const NodeState = v.picklist(["unknown", "down", "ready", "disconnected"]);

export type NodeStatus = v.InferOutput<typeof NodeStatus>;
export const NodeStatus = v.partial(v.object({ State: NodeState, Message: v.string(), Addr: v.string() }));

export type Reachability = v.InferOutput<typeof Reachability>;
export const Reachability = v.picklist(["unknown", "unreachable", "reachable"]);

export type ManagerStatus = v.InferOutput<typeof ManagerStatus>;
export const ManagerStatus = v.nullable(v.partial(v.object({ Leader: v.optional(v.boolean(), false), Reachability: Reachability, Addr: v.string() })));

export type Node = v.InferOutput<typeof Node>;
export const Node = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: NodeSpec, Description: NodeDescription, Status: NodeStatus, ManagerStatus: ManagerStatus }));

export type SwarmSpec = v.InferOutput<typeof SwarmSpec>;
export const SwarmSpec = v.partial(v.object({ Name: v.string(), Labels: v.record(v.string(), v.string()), Orchestration: v.nullable(v.partial(v.object({ TaskHistoryRetentionLimit: v.pipe(v.number(), v.integer()) }))), Raft: v.partial(v.object({ SnapshotInterval: v.pipe(v.number(), v.integer()), KeepOldSnapshots: v.pipe(v.number(), v.integer()), LogEntriesForSlowFollowers: v.pipe(v.number(), v.integer()), ElectionTick: v.pipe(v.number(), v.integer()), HeartbeatTick: v.pipe(v.number(), v.integer()) })), Dispatcher: v.nullable(v.partial(v.object({ HeartbeatPeriod: v.pipe(v.number(), v.integer()) }))), CAConfig: v.nullable(v.partial(v.object({ NodeCertExpiry: v.pipe(v.number(), v.integer()), ExternalCAs: v.array(v.partial(v.object({ Protocol: v.literal("cfssl"), URL: v.string(), Options: v.record(v.string(), v.string()), CACert: v.string() }))), SigningCACert: v.string(), SigningCAKey: v.string(), ForceRotate: v.pipe(v.number(), v.integer()) }))), EncryptionConfig: v.partial(v.object({ AutoLockManagers: v.boolean() })), TaskDefaults: v.partial(v.object({ LogDriver: v.partial(v.object({ Name: v.string(), Options: v.record(v.string(), v.string()) })) })) }));

export type ClusterInfo = v.InferOutput<typeof ClusterInfo>;
export const ClusterInfo = v.nullable(v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: SwarmSpec, TLSInfo: TLSInfo, RootRotationInProgress: v.boolean(), DataPathPort: v.pipe(v.number(), v.integer()), DefaultAddrPool: v.array(v.string()), SubnetSize: v.pipe(v.number(), v.integer(), v.maxValue(29)) })));

export type JoinTokens = v.InferOutput<typeof JoinTokens>;
export const JoinTokens = v.partial(v.object({ Worker: v.string(), Manager: v.string() }));

export type Swarm = v.InferOutput<typeof Swarm>;
export const Swarm = v.intersect([ClusterInfo, v.partial(v.object({ JoinTokens: JoinTokens }))]);

export type NetworkAttachmentConfig = v.InferOutput<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = v.partial(v.object({ Target: v.string(), Aliases: v.array(v.string()), DriverOpts: v.record(v.string(), v.string()) }));

export type TaskSpec = v.InferOutput<typeof TaskSpec>;
export const TaskSpec = v.partial(v.object({ PluginSpec: v.partial(v.object({ Name: v.string(), Remote: v.string(), Disabled: v.boolean(), PluginPrivilege: v.array(PluginPrivilege) })), ContainerSpec: v.partial(v.object({ Image: v.string(), Labels: v.record(v.string(), v.string()), Command: v.array(v.string()), Args: v.array(v.string()), Hostname: v.string(), Env: v.array(v.string()), Dir: v.string(), User: v.string(), Groups: v.array(v.string()), Privileges: v.partial(v.object({ CredentialSpec: v.partial(v.object({ Config: v.string(), File: v.string(), Registry: v.string() })), SELinuxContext: v.partial(v.object({ Disable: v.boolean(), User: v.string(), Role: v.string(), Type: v.string(), Level: v.string() })) })), TTY: v.boolean(), OpenStdin: v.boolean(), ReadOnly: v.boolean(), Mounts: v.array(Mount), StopSignal: v.string(), StopGracePeriod: v.pipe(v.number(), v.integer()), HealthCheck: HealthConfig, Hosts: v.array(v.string()), DNSConfig: v.partial(v.object({ Nameservers: v.array(v.string()), Search: v.array(v.string()), Options: v.array(v.string()) })), Secrets: v.array(v.partial(v.object({ File: v.partial(v.object({ Name: v.string(), UID: v.string(), GID: v.string(), Mode: v.pipe(v.number(), v.integer()) })), SecretID: v.string(), SecretName: v.string() }))), Configs: v.array(v.partial(v.object({ File: v.partial(v.object({ Name: v.string(), UID: v.string(), GID: v.string(), Mode: v.pipe(v.number(), v.integer()) })), Runtime: v.partial(v.object({  })), ConfigID: v.string(), ConfigName: v.string() }))), Isolation: v.picklist(["default", "process", "hyperv"]), Init: v.nullable(v.boolean()), Sysctls: v.record(v.string(), v.string()), CapabilityAdd: v.array(v.string()), CapabilityDrop: v.array(v.string()), Ulimits: v.array(v.partial(v.object({ Name: v.string(), Soft: v.pipe(v.number(), v.integer()), Hard: v.pipe(v.number(), v.integer()) }))) })), NetworkAttachmentSpec: v.partial(v.object({ ContainerID: v.string() })), Resources: v.partial(v.object({ Limits: Limit, Reservations: ResourceObject })), RestartPolicy: v.partial(v.object({ Condition: v.picklist(["none", "on-failure", "any"]), Delay: v.pipe(v.number(), v.integer()), MaxAttempts: v.optional(v.pipe(v.number(), v.integer()), 0), Window: v.optional(v.pipe(v.number(), v.integer()), 0) })), Placement: v.partial(v.object({ Constraints: v.array(v.string()), Preferences: v.array(v.partial(v.object({ Spread: v.partial(v.object({ SpreadDescriptor: v.string() })) }))), MaxReplicas: v.optional(v.pipe(v.number(), v.integer()), 0), Platforms: v.array(Platform) })), ForceUpdate: v.pipe(v.number(), v.integer()), Runtime: v.string(), Networks: v.array(NetworkAttachmentConfig), LogDriver: v.partial(v.object({ Name: v.string(), Options: v.record(v.string(), v.string()) })) }));

export type TaskState = v.InferOutput<typeof TaskState>;
export const TaskState = v.picklist(["new", "allocated", "pending", "assigned", "accepted", "preparing", "ready", "starting", "running", "complete", "shutdown", "failed", "rejected", "remove", "orphaned"]);

export type Task = v.InferOutput<typeof Task>;
export const Task = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Name: v.string(), Labels: v.record(v.string(), v.string()), Spec: TaskSpec, ServiceID: v.string(), Slot: v.pipe(v.number(), v.integer()), NodeID: v.string(), AssignedGenericResources: GenericResources, Status: v.partial(v.object({ Timestamp: v.string(), State: TaskState, Message: v.string(), Err: v.string(), ContainerStatus: v.partial(v.object({ ContainerID: v.string(), PID: v.pipe(v.number(), v.integer()), ExitCode: v.pipe(v.number(), v.integer()) })) })), DesiredState: TaskState, JobIteration: ObjectVersion }));

export type EndpointPortConfig = v.InferOutput<typeof EndpointPortConfig>;
export const EndpointPortConfig = v.partial(v.object({ Name: v.string(), Protocol: v.picklist(["tcp", "udp", "sctp"]), TargetPort: v.pipe(v.number(), v.integer()), PublishedPort: v.pipe(v.number(), v.integer()), PublishMode: v.optional(v.picklist(["ingress", "host"]), "ingress") }));

export type EndpointSpec = v.InferOutput<typeof EndpointSpec>;
export const EndpointSpec = v.partial(v.object({ Mode: v.optional(v.picklist(["vip", "dnsrr"]), "vip"), Ports: v.array(EndpointPortConfig) }));

export type ServiceSpec = v.InferOutput<typeof ServiceSpec>;
export const ServiceSpec = v.partial(v.object({ Name: v.string(), Labels: v.record(v.string(), v.string()), TaskTemplate: TaskSpec, Mode: v.partial(v.object({ Replicated: v.partial(v.object({ Replicas: v.pipe(v.number(), v.integer()) })), Global: v.partial(v.object({  })), ReplicatedJob: v.partial(v.object({ MaxConcurrent: v.optional(v.pipe(v.number(), v.integer()), 1), TotalCompletions: v.pipe(v.number(), v.integer()) })), GlobalJob: v.partial(v.object({  })) })), UpdateConfig: v.partial(v.object({ Parallelism: v.pipe(v.number(), v.integer()), Delay: v.pipe(v.number(), v.integer()), FailureAction: v.picklist(["continue", "pause", "rollback"]), Monitor: v.pipe(v.number(), v.integer()), MaxFailureRatio: v.number(), Order: v.picklist(["stop-first", "start-first"]) })), RollbackConfig: v.partial(v.object({ Parallelism: v.pipe(v.number(), v.integer()), Delay: v.pipe(v.number(), v.integer()), FailureAction: v.picklist(["continue", "pause"]), Monitor: v.pipe(v.number(), v.integer()), MaxFailureRatio: v.number(), Order: v.picklist(["stop-first", "start-first"]) })), Networks: v.array(NetworkAttachmentConfig), EndpointSpec: EndpointSpec }));

export type Service = v.InferOutput<typeof Service>;
export const Service = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: ServiceSpec, Endpoint: v.partial(v.object({ Spec: EndpointSpec, Ports: v.array(EndpointPortConfig), VirtualIPs: v.array(v.partial(v.object({ NetworkID: v.string(), Addr: v.string() }))) })), UpdateStatus: v.partial(v.object({ State: v.picklist(["updating", "paused", "completed"]), StartedAt: v.string(), CompletedAt: v.string(), Message: v.string() })), ServiceStatus: v.partial(v.object({ RunningTasks: v.pipe(v.number(), v.integer()), DesiredTasks: v.pipe(v.number(), v.integer()), CompletedTasks: v.pipe(v.number(), v.integer()) })), JobStatus: v.partial(v.object({ JobIteration: ObjectVersion, LastExecution: v.string() })) }));

export type ImageDeleteResponseItem = v.InferOutput<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = v.partial(v.object({ Untagged: v.string(), Deleted: v.string() }));

export type ServiceUpdateResponse = v.InferOutput<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = v.partial(v.object({ Warnings: v.array(v.string()) }));

export type ContainerSummary = v.InferOutput<typeof ContainerSummary>;
export const ContainerSummary = v.partial(v.object({ Id: v.string(), Names: v.array(v.string()), Image: v.string(), ImageID: v.string(), Command: v.string(), Created: v.pipe(v.number(), v.integer()), Ports: v.array(Port), SizeRw: v.pipe(v.number(), v.integer()), SizeRootFs: v.pipe(v.number(), v.integer()), Labels: v.record(v.string(), v.string()), State: v.string(), Status: v.string(), HostConfig: v.partial(v.object({ NetworkMode: v.string() })), NetworkSettings: v.partial(v.object({ Networks: v.record(v.string(), EndpointSettings) })), Mounts: v.array(MountPoint) }));

export type Driver = v.InferOutput<typeof Driver>;
export const Driver = v.object({ Name: v.string(), Options: v.optional(v.record(v.string(), v.string())) });

export type SecretSpec = v.InferOutput<typeof SecretSpec>;
export const SecretSpec = v.partial(v.object({ Name: v.string(), Labels: v.record(v.string(), v.string()), Data: v.string(), Driver: Driver, Templating: Driver }));

export type Secret = v.InferOutput<typeof Secret>;
export const Secret = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: SecretSpec }));

export type ConfigSpec = v.InferOutput<typeof ConfigSpec>;
export const ConfigSpec = v.partial(v.object({ Name: v.string(), Labels: v.record(v.string(), v.string()), Data: v.string(), Templating: Driver }));

export type Config = v.InferOutput<typeof Config>;
export const Config = v.partial(v.object({ ID: v.string(), Version: ObjectVersion, CreatedAt: v.string(), UpdatedAt: v.string(), Spec: ConfigSpec }));

export type ContainerState = v.InferOutput<typeof ContainerState>;
export const ContainerState = v.nullable(v.partial(v.object({ Status: v.picklist(["created", "running", "paused", "restarting", "removing", "exited", "dead"]), Running: v.boolean(), Paused: v.boolean(), Restarting: v.boolean(), OOMKilled: v.boolean(), Dead: v.boolean(), Pid: v.pipe(v.number(), v.integer()), ExitCode: v.pipe(v.number(), v.integer()), Error: v.string(), StartedAt: v.string(), FinishedAt: v.string(), Health: Health })));

export type ContainerCreateResponse = v.InferOutput<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = v.object({ Id: v.string(), Warnings: v.array(v.string()) });

export type ContainerWaitExitError = v.InferOutput<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = v.partial(v.object({ Message: v.string() }));

export type ContainerWaitResponse = v.InferOutput<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = v.object({ StatusCode: v.pipe(v.number(), v.integer()), Error: v.optional(ContainerWaitExitError) });

export type SystemVersion = v.InferOutput<typeof SystemVersion>;
export const SystemVersion = v.partial(v.object({ Platform: v.object({ Name: v.string() }), Components: v.array(v.object({ Name: v.string(), Version: v.string(), Details: v.optional(v.nullable(v.partial(v.object({  })))) })), Version: v.string(), ApiVersion: v.string(), MinAPIVersion: v.string(), GitCommit: v.string(), GoVersion: v.string(), Os: v.string(), Arch: v.string(), KernelVersion: v.string(), Experimental: v.boolean(), BuildTime: v.string() }));

export type PluginsInfo = v.InferOutput<typeof PluginsInfo>;
export const PluginsInfo = v.partial(v.object({ Volume: v.array(v.string()), Network: v.array(v.string()), Authorization: v.array(v.string()), Log: v.array(v.string()) }));

export type IndexInfo = v.InferOutput<typeof IndexInfo>;
export const IndexInfo = v.nullable(v.partial(v.object({ Name: v.string(), Mirrors: v.array(v.string()), Secure: v.boolean(), Official: v.boolean() })));

export type RegistryServiceConfig = v.InferOutput<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = v.nullable(v.partial(v.object({ AllowNondistributableArtifactsCIDRs: v.array(v.string()), AllowNondistributableArtifactsHostnames: v.array(v.string()), InsecureRegistryCIDRs: v.array(v.string()), IndexConfigs: v.record(v.string(), IndexInfo), Mirrors: v.array(v.string()) })));

export type Runtime = v.InferOutput<typeof Runtime>;
export const Runtime = v.partial(v.object({ path: v.string(), runtimeArgs: v.nullable(v.array(v.string())) }));

export type LocalNodeState = v.InferOutput<typeof LocalNodeState>;
export const LocalNodeState = v.optional(v.picklist(["", "inactive", "pending", "active", "error", "locked"]), "");

export type PeerNode = v.InferOutput<typeof PeerNode>;
export const PeerNode = v.partial(v.object({ NodeID: v.string(), Addr: v.string() }));

export type SwarmInfo = v.InferOutput<typeof SwarmInfo>;
export const SwarmInfo = v.partial(v.object({ NodeID: v.optional(v.string(), ""), NodeAddr: v.optional(v.string(), ""), LocalNodeState: LocalNodeState, ControlAvailable: v.optional(v.boolean(), false), Error: v.optional(v.string(), ""), RemoteManagers: v.nullable(v.array(PeerNode)), Nodes: v.nullable(v.pipe(v.number(), v.integer())), Managers: v.nullable(v.pipe(v.number(), v.integer())), Cluster: ClusterInfo }));

export type Commit = v.InferOutput<typeof Commit>;
export const Commit = v.partial(v.object({ ID: v.string(), Expected: v.string() }));

export type SystemInfo = v.InferOutput<typeof SystemInfo>;
export const SystemInfo = v.partial(v.object({ ID: v.string(), Containers: v.pipe(v.number(), v.integer()), ContainersRunning: v.pipe(v.number(), v.integer()), ContainersPaused: v.pipe(v.number(), v.integer()), ContainersStopped: v.pipe(v.number(), v.integer()), Images: v.pipe(v.number(), v.integer()), Driver: v.string(), DriverStatus: v.array(v.array(v.string())), DockerRootDir: v.string(), Plugins: PluginsInfo, MemoryLimit: v.boolean(), SwapLimit: v.boolean(), KernelMemoryTCP: v.boolean(), CpuCfsPeriod: v.boolean(), CpuCfsQuota: v.boolean(), CPUShares: v.boolean(), CPUSet: v.boolean(), PidsLimit: v.boolean(), OomKillDisable: v.boolean(), IPv4Forwarding: v.boolean(), BridgeNfIptables: v.boolean(), BridgeNfIp6tables: v.boolean(), Debug: v.boolean(), NFd: v.pipe(v.number(), v.integer()), NGoroutines: v.pipe(v.number(), v.integer()), SystemTime: v.string(), LoggingDriver: v.string(), CgroupDriver: v.optional(v.picklist(["cgroupfs", "systemd", "none"]), "cgroupfs"), CgroupVersion: v.optional(v.picklist(["1", "2"]), "1"), NEventsListener: v.pipe(v.number(), v.integer()), KernelVersion: v.string(), OperatingSystem: v.string(), OSVersion: v.string(), OSType: v.string(), Architecture: v.string(), NCPU: v.pipe(v.number(), v.integer()), MemTotal: v.pipe(v.number(), v.integer()), IndexServerAddress: v.optional(v.string(), "https://index.docker.io/v1/"), RegistryConfig: RegistryServiceConfig, GenericResources: GenericResources, HttpProxy: v.string(), HttpsProxy: v.string(), NoProxy: v.string(), Name: v.string(), Labels: v.array(v.string()), ExperimentalBuild: v.boolean(), ServerVersion: v.string(), Runtimes: v.record(v.string(), Runtime), DefaultRuntime: v.optional(v.string(), "runc"), Swarm: SwarmInfo, LiveRestoreEnabled: v.optional(v.boolean(), false), Isolation: v.optional(v.picklist(["default", "hyperv", "process"]), "default"), InitBinary: v.string(), ContainerdCommit: Commit, RuncCommit: Commit, InitCommit: Commit, SecurityOptions: v.array(v.string()), ProductLicense: v.string(), DefaultAddressPools: v.array(v.partial(v.object({ Base: v.string(), Size: v.pipe(v.number(), v.integer()) }))), Warnings: v.array(v.string()) }));

export type EventActor = v.InferOutput<typeof EventActor>;
export const EventActor = v.partial(v.object({ ID: v.string(), Attributes: v.record(v.string(), v.string()) }));

export type EventMessage = v.InferOutput<typeof EventMessage>;
export const EventMessage = v.partial(v.object({ Type: v.picklist(["builder", "config", "container", "daemon", "image", "network", "node", "plugin", "secret", "service", "volume"]), Action: v.string(), Actor: EventActor, scope: v.picklist(["local", "swarm"]), time: v.pipe(v.number(), v.integer()), timeNano: v.pipe(v.number(), v.integer()) }));

export type OCIDescriptor = v.InferOutput<typeof OCIDescriptor>;
export const OCIDescriptor = v.partial(v.object({ mediaType: v.string(), digest: v.string(), size: v.pipe(v.number(), v.integer()) }));

export type OCIPlatform = v.InferOutput<typeof OCIPlatform>;
export const OCIPlatform = v.partial(v.object({ architecture: v.string(), os: v.string(), "os.version": v.string(), "os.features": v.array(v.string()), variant: v.string() }));

export type DistributionInspect = v.InferOutput<typeof DistributionInspect>;
export const DistributionInspect = v.object({ Descriptor: OCIDescriptor, Platforms: v.array(OCIPlatform) });

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: v.literal("GET"),
  path: v.literal("/containers/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ all: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), limit: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), size: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), filters: v.string() }))) },
  responses: { 200: v.array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: v.literal("POST"),
  path: v.literal("/containers/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ name: v.pipe(v.string(), v.regex(new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$"))), platform: v.string() }))), body: v.intersect([ContainerConfig, v.partial(v.object({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }))]) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ size: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.partial(v.object({ Id: v.string(), Created: v.string(), Path: v.string(), Args: v.array(v.string()), State: ContainerState, Image: v.string(), ResolvConfPath: v.string(), HostnamePath: v.string(), HostsPath: v.string(), LogPath: v.string(), Name: v.string(), RestartCount: v.pipe(v.number(), v.integer()), Driver: v.string(), Platform: v.string(), MountLabel: v.string(), ProcessLabel: v.string(), AppArmorProfile: v.string(), ExecIDs: v.nullable(v.array(v.string())), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: v.pipe(v.number(), v.integer()), SizeRootFs: v.pipe(v.number(), v.integer()), Mounts: v.array(MountPoint), Config: ContainerConfig, NetworkSettings: NetworkSettings })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/top"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ ps_args: v.optional(v.string(), "-ef") }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.partial(v.object({ Titles: v.array(v.string()), Processes: v.array(v.array(v.string())) })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/logs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ follow: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdout: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stderr: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), since: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), 0), until: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), 0), timestamps: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), tail: v.optional(v.string(), "all") }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: v.unknown(), 500: v.unknown() },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/changes"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: v.array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/export"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: v.unknown(), 500: v.unknown() },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/stats"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ stream: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), true), "one-shot": v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.record(v.string(), v.unknown()), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/resize"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ h: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), w: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: v.unknown(), 500: v.unknown() },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/start"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ detachKeys: v.string() }))), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 304: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/stop"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ signal: v.string(), t: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }))), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 304: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/restart"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ signal: v.string(), t: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }))), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/kill"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ signal: v.optional(v.string(), "SIGKILL") }))), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }), body: v.intersect([Resources, v.partial(v.object({ RestartPolicy: RestartPolicy }))]) },
  responses: { 200: v.partial(v.object({ Warnings: v.array(v.string()) })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/rename"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ name: v.string() }), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/pause"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/unpause"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/attach"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ detachKeys: v.string(), logs: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stream: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdin: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdout: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stderr: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 101: v.unknown(), 200: v.unknown(), 400: v.unknown(), 404: v.unknown(), 500: v.unknown() },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/attach/ws"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ detachKeys: v.string(), logs: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stream: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdin: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdout: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stderr: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 101: v.unknown(), 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/wait"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ condition: v.optional(v.picklist(["not-running", "next-exit", "removed"]), "not-running") }))), path: v.object({ id: v.string() }) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/containers/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ v: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), link: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/archive"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ path: v.string() }), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 400: v.unknown(), 404: v.unknown(), 500: v.unknown() },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: v.literal("PUT"),
  path: v.literal("/containers/{id}/archive"),
  requestFormat: v.literal("binary"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ path: v.string(), noOverwriteDirNonDir: v.optional(v.string()), copyUIDGID: v.optional(v.string()) }), path: v.object({ id: v.string() }), body: v.custom<Blob>((v) => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: v.literal("HEAD"),
  path: v.literal("/containers/{id}/archive"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ path: v.string() }), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: v.object({ "X-Docker-Container-Path-Stat": v.string() }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: v.literal("POST"),
  path: v.literal("/containers/prune"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.partial(v.object({ ContainersDeleted: v.array(v.string()), SpaceReclaimed: v.pipe(v.number(), v.integer()) })), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: v.literal("GET"),
  path: v.literal("/images/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ all: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), filters: v.string(), "shared-size": v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), digests: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))) },
  responses: { 200: v.array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: v.literal("POST"),
  path: v.literal("/build"),
  requestFormat: v.literal("binary"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ dockerfile: v.optional(v.string(), "Dockerfile"), t: v.string(), extrahosts: v.string(), remote: v.string(), q: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), nocache: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), cachefrom: v.string(), pull: v.string(), rm: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), true), forcerm: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), memory: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), memswap: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), cpushares: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), cpusetcpus: v.string(), cpuperiod: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), cpuquota: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), buildargs: v.string(), shmsize: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), squash: v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), labels: v.string(), networkmode: v.string(), platform: v.string(), target: v.string(), outputs: v.string() }))), header: v.optional(v.partial(v.object({ "Content-type": v.literal("application/x-tar"), "X-Registry-Config": v.string() }))), body: v.custom<Blob>((v) => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: v.literal("POST"),
  path: v.literal("/build/prune"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ "keep-storage": v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), all: v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), filters: v.string() }))) },
  responses: { 200: v.partial(v.object({ CachesDeleted: v.array(v.string()), SpaceReclaimed: v.pipe(v.number(), v.integer()) })), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: v.literal("POST"),
  path: v.literal("/images/create"),
  requestFormat: v.literal("text"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ fromImage: v.string(), fromSrc: v.string(), repo: v.string(), tag: v.string(), message: v.string(), changes: v.array(v.string()), platform: v.string() }))), header: v.optional(v.partial(v.object({ "X-Registry-Auth": v.string() }))), body: v.string() },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: v.literal("GET"),
  path: v.literal("/images/{name}/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: v.literal("GET"),
  path: v.literal("/images/{name}/history"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: v.array(v.object({ Id: v.string(), Created: v.pipe(v.number(), v.integer()), CreatedBy: v.string(), Tags: v.array(v.string()), Size: v.pipe(v.number(), v.integer()), Comment: v.string() })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: v.literal("POST"),
  path: v.literal("/images/{name}/push"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ tag: v.string() }))), path: v.object({ name: v.string() }), header: v.object({ "X-Registry-Auth": v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: v.literal("POST"),
  path: v.literal("/images/{name}/tag"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ repo: v.string(), tag: v.string() }))), path: v.object({ name: v.string() }) },
  responses: { 201: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/images/{name}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), noprune: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ name: v.string() }) },
  responses: { 200: v.array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: v.literal("GET"),
  path: v.literal("/images/search"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ term: v.string(), limit: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer()))), filters: v.optional(v.string()) }) },
  responses: { 200: v.array(v.partial(v.object({ description: v.string(), is_official: v.boolean(), is_automated: v.boolean(), name: v.string(), star_count: v.pipe(v.number(), v.integer()) }))), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: v.literal("POST"),
  path: v.literal("/images/prune"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.partial(v.object({ ImagesDeleted: v.array(ImageDeleteResponseItem), SpaceReclaimed: v.pipe(v.number(), v.integer()) })), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: v.literal("POST"),
  path: v.literal("/auth"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: AuthConfig },
  responses: { 200: v.object({ Status: v.string(), IdentityToken: v.optional(v.string()) }), 204: v.unknown(), 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: v.literal("GET"),
  path: v.literal("/info"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: v.literal("GET"),
  path: v.literal("/version"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: v.literal("GET"),
  path: v.literal("/_ping"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: v.unknown(), 500: v.unknown() },
  responseHeaders: { 200: v.object({ Swarm: v.optional(v.picklist(["inactive", "pending", "error", "locked", "active/worker", "active/manager"]), "inactive"), "Docker-Experimental": v.boolean(), "Cache-Control": v.optional(v.string(), "no-cache, no-store, must-revalidate"), Pragma: v.optional(v.string(), "no-cache"), "API-Version": v.string(), "Builder-Version": v.optional(v.string(), "2") }), 500: v.object({ "Cache-Control": v.optional(v.string(), "no-cache, no-store, must-revalidate"), Pragma: v.optional(v.string(), "no-cache") }) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: v.literal("HEAD"),
  path: v.literal("/_ping"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: v.unknown(), 500: v.unknown() },
  responseHeaders: { 200: v.object({ Swarm: v.optional(v.picklist(["inactive", "pending", "error", "locked", "active/worker", "active/manager"]), "inactive"), "Docker-Experimental": v.boolean(), "Cache-Control": v.optional(v.string(), "no-cache, no-store, must-revalidate"), Pragma: v.optional(v.string(), "no-cache"), "API-Version": v.string(), "Builder-Version": v.string() }) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: v.literal("POST"),
  path: v.literal("/commit"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ container: v.string(), repo: v.string(), tag: v.string(), comment: v.string(), author: v.string(), pause: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), true), changes: v.string() }))), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: v.literal("GET"),
  path: v.literal("/events"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ since: v.string(), until: v.string(), filters: v.string() }))) },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: v.literal("GET"),
  path: v.literal("/system/df"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ type: v.array(v.picklist(["container", "image", "volume", "build-cache"])) }))) },
  responses: { 200: v.partial(v.object({ LayersSize: v.pipe(v.number(), v.integer()), Images: v.array(ImageSummary), Containers: v.array(ContainerSummary), Volumes: v.array(Volume), BuildCache: v.array(BuildCache) })), 500: ErrorResponse },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: v.literal("GET"),
  path: v.literal("/images/{name}/get"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: v.unknown(), 500: v.unknown() },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: v.literal("GET"),
  path: v.literal("/images/get"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ names: v.array(v.string()) }))) },
  responses: { 200: v.unknown(), 500: v.unknown() },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: v.literal("POST"),
  path: v.literal("/images/load"),
  requestFormat: v.literal("text"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ quiet: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))) },
  responses: { 200: v.unknown(), 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/exec"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }), body: v.optional(v.partial(v.object({ AttachStdin: v.boolean(), AttachStdout: v.boolean(), AttachStderr: v.boolean(), ConsoleSize: v.nullable(v.pipe(v.array(v.pipe(v.number(), v.integer(), v.minValue(0))), v.minLength(2), v.maxLength(2))), DetachKeys: v.string(), Tty: v.boolean(), Env: v.array(v.string()), Cmd: v.array(v.string()), Privileged: v.optional(v.boolean(), false), User: v.string(), WorkingDir: v.string() }))) },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: v.literal("POST"),
  path: v.literal("/exec/{id}/start"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }), body: v.optional(v.partial(v.object({ Detach: v.boolean(), Tty: v.boolean(), ConsoleSize: v.nullable(v.pipe(v.array(v.pipe(v.number(), v.integer(), v.minValue(0))), v.minLength(2), v.maxLength(2))) }))) },
  responses: { 200: v.unknown(), 404: v.unknown(), 409: v.unknown() },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: v.literal("POST"),
  path: v.literal("/exec/{id}/resize"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ h: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), w: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: v.literal("GET"),
  path: v.literal("/exec/{id}/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: v.partial(v.object({ CanRemove: v.boolean(), DetachKeys: v.string(), ID: v.string(), Running: v.boolean(), ExitCode: v.pipe(v.number(), v.integer()), ProcessConfig: ProcessConfig, OpenStdin: v.boolean(), OpenStderr: v.boolean(), OpenStdout: v.boolean(), ContainerID: v.string(), Pid: v.pipe(v.number(), v.integer()) })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: v.literal("GET"),
  path: v.literal("/volumes"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: v.literal("POST"),
  path: v.literal("/volumes/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: v.literal("GET"),
  path: v.literal("/volumes/{name}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: v.literal("PUT"),
  path: v.literal("/volumes/{name}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }), path: v.object({ name: v.string() }), body: v.optional(v.partial(v.object({ Spec: ClusterVolumeSpec }))) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/volumes/{name}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ name: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: v.literal("POST"),
  path: v.literal("/volumes/prune"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.partial(v.object({ VolumesDeleted: v.array(v.string()), SpaceReclaimed: v.pipe(v.number(), v.integer()) })), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: v.literal("GET"),
  path: v.literal("/networks"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: v.literal("GET"),
  path: v.literal("/networks/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ verbose: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), scope: v.string() }))), path: v.object({ id: v.string() }) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/networks/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: v.literal("POST"),
  path: v.literal("/networks/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.object({ Name: v.string(), CheckDuplicate: v.optional(v.boolean()), Driver: v.optional(v.string(), "bridge"), Internal: v.optional(v.boolean()), Attachable: v.optional(v.boolean()), Ingress: v.optional(v.boolean()), IPAM: v.optional(IPAM), EnableIPv6: v.optional(v.boolean()), Options: v.optional(v.record(v.string(), v.string())), Labels: v.optional(v.record(v.string(), v.string())) }) },
  responses: { 201: v.partial(v.object({ Id: v.string(), Warning: v.string() })), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: v.literal("POST"),
  path: v.literal("/networks/{id}/connect"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }), body: v.optional(v.partial(v.object({ Container: v.string(), EndpointConfig: EndpointSettings }))) },
  responses: { 200: v.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: v.literal("POST"),
  path: v.literal("/networks/{id}/disconnect"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }), body: v.optional(v.partial(v.object({ Container: v.string(), Force: v.boolean() }))) },
  responses: { 200: v.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: v.literal("POST"),
  path: v.literal("/networks/prune"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.partial(v.object({ NetworksDeleted: v.array(v.string()) })), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: v.literal("GET"),
  path: v.literal("/plugins"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: v.literal("GET"),
  path: v.literal("/plugins/privileges"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ remote: v.string() }) },
  responses: { 200: v.array(PluginPrivilege), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: v.literal("POST"),
  path: v.literal("/plugins/pull"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ remote: v.string(), name: v.optional(v.string()) }), header: v.optional(v.partial(v.object({ "X-Registry-Auth": v.string() }))), body: v.array(PluginPrivilege) },
  responses: { 204: v.unknown(), 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: v.literal("GET"),
  path: v.literal("/plugins/{name}/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/plugins/{name}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ name: v.string() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/enable"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ timeout: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), 0) }))), path: v.object({ name: v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/disable"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")) }))), path: v.object({ name: v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/upgrade"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ remote: v.string() }), path: v.object({ name: v.string() }), header: v.optional(v.partial(v.object({ "X-Registry-Auth": v.string() }))), body: v.array(PluginPrivilege) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: v.literal("POST"),
  path: v.literal("/plugins/create"),
  requestFormat: v.literal("text"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ name: v.string() }) },
  responses: { 204: v.unknown(), 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/push"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/set"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }), body: v.array(v.string()) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: v.literal("GET"),
  path: v.literal("/nodes"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Node), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: v.literal("GET"),
  path: v.literal("/nodes/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/nodes/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: v.literal("POST"),
  path: v.literal("/nodes/{id}/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }), path: v.object({ id: v.string() }), body: NodeSpec },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: v.literal("GET"),
  path: v.literal("/swarm"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: v.literal("POST"),
  path: v.literal("/swarm/init"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.optional(v.partial(v.object({ ListenAddr: v.string(), AdvertiseAddr: v.string(), DataPathAddr: v.string(), DataPathPort: v.pipe(v.number(), v.integer()), DefaultAddrPool: v.array(v.string()), ForceNewCluster: v.boolean(), SubnetSize: v.pipe(v.number(), v.integer()), Spec: SwarmSpec }))) },
  responses: { 200: v.string(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: v.literal("POST"),
  path: v.literal("/swarm/join"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.optional(v.partial(v.object({ ListenAddr: v.string(), AdvertiseAddr: v.string(), DataPathAddr: v.string(), RemoteAddrs: v.array(v.string()), JoinToken: v.string() }))) },
  responses: { 200: v.unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: v.literal("POST"),
  path: v.literal("/swarm/leave"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ force: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))) },
  responses: { 200: v.unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: v.literal("POST"),
  path: v.literal("/swarm/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), rotateWorkerToken: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), rotateManagerToken: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), rotateManagerUnlockKey: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }), body: SwarmSpec },
  responses: { 200: v.unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: v.literal("GET"),
  path: v.literal("/swarm/unlockkey"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: v.partial(v.object({ UnlockKey: v.string() })), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: v.literal("POST"),
  path: v.literal("/swarm/unlock"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.optional(v.partial(v.object({ UnlockKey: v.string() }))) },
  responses: { 200: v.unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: v.literal("GET"),
  path: v.literal("/services"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string(), status: v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")) }))) },
  responses: { 200: v.array(Service), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: v.literal("POST"),
  path: v.literal("/services/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.optional(v.partial(v.object({ "X-Registry-Auth": v.string() }))), body: v.intersect([ServiceSpec, v.record(v.string(), v.unknown())]) },
  responses: { 201: v.partial(v.object({ ID: v.string(), Warning: v.string() })), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: v.literal("GET"),
  path: v.literal("/services/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ insertDefaults: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false) }))), path: v.object({ id: v.string() }) },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/services/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: v.literal("POST"),
  path: v.literal("/services/{id}/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), registryAuthFrom: v.optional(v.picklist(["spec", "previous-spec"]), "spec"), rollback: v.optional(v.string()) }), path: v.object({ id: v.string() }), header: v.optional(v.partial(v.object({ "X-Registry-Auth": v.string() }))), body: v.intersect([ServiceSpec, v.record(v.string(), v.unknown())]) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: v.literal("GET"),
  path: v.literal("/services/{id}/logs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ details: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), follow: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdout: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stderr: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), since: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), 0), timestamps: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), tail: v.optional(v.string(), "all") }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: v.unknown(), 500: v.unknown(), 503: v.unknown() },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: v.literal("GET"),
  path: v.literal("/tasks"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: v.literal("GET"),
  path: v.literal("/tasks/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: v.literal("GET"),
  path: v.literal("/tasks/{id}/logs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ details: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), follow: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stdout: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), stderr: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), since: v.optional(v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())), 0), timestamps: v.optional(v.pipe(v.union([v.boolean(), v.string(), v.number()]), v.transform((x) => x === true || x === "true" || x === 1 || x === "1")), false), tail: v.optional(v.string(), "all") }))), path: v.object({ id: v.string() }) },
  responses: { 200: v.unknown(), 404: v.unknown(), 500: v.unknown(), 503: v.unknown() },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: v.literal("GET"),
  path: v.literal("/secrets"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: v.literal("POST"),
  path: v.literal("/secrets/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.intersect([SecretSpec, v.record(v.string(), v.unknown())]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: v.literal("GET"),
  path: v.literal("/secrets/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/secrets/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: v.literal("POST"),
  path: v.literal("/secrets/{id}/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }), path: v.object({ id: v.string() }), body: SecretSpec },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: v.literal("GET"),
  path: v.literal("/configs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ filters: v.string() }))) },
  responses: { 200: v.array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: v.literal("POST"),
  path: v.literal("/configs/create"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: v.intersect([ConfigSpec, v.record(v.string(), v.unknown())]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: v.literal("GET"),
  path: v.literal("/configs/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: v.literal("DELETE"),
  path: v.literal("/configs/{id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ id: v.string() }) },
  responses: { 204: v.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: v.literal("POST"),
  path: v.literal("/configs/{id}/update"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ version: v.pipe(v.union([v.string(), v.number()]), v.transform((x) => Number(x)), v.pipe(v.number(), v.integer())) }), path: v.object({ id: v.string() }), body: ConfigSpec },
  responses: { 200: v.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: v.literal("GET"),
  path: v.literal("/distribution/{name}/json"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ name: v.string() }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: v.literal("POST"),
  path: v.literal("/session"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 101: v.unknown(), 400: v.unknown(), 500: v.unknown() },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/containers/json": get_ContainerList,
"/containers/{id}/json": get_ContainerInspect,
"/containers/{id}/top": get_ContainerTop,
"/containers/{id}/logs": get_ContainerLogs,
"/containers/{id}/changes": get_ContainerChanges,
"/containers/{id}/export": get_ContainerExport,
"/containers/{id}/stats": get_ContainerStats,
"/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
"/containers/{id}/archive": get_ContainerArchive,
"/images/json": get_ImageList,
"/images/{name}/json": get_ImageInspect,
"/images/{name}/history": get_ImageHistory,
"/images/search": get_ImageSearch,
"/info": get_SystemInfo,
"/version": get_SystemVersion,
"/_ping": get_SystemPing,
"/events": get_SystemEvents,
"/system/df": get_SystemDataUsage,
"/images/{name}/get": get_ImageGet,
"/images/get": get_ImageGetAll,
"/exec/{id}/json": get_ExecInspect,
"/volumes": get_VolumeList,
"/volumes/{name}": get_VolumeInspect,
"/networks": get_NetworkList,
"/networks/{id}": get_NetworkInspect,
"/plugins": get_PluginList,
"/plugins/privileges": get_GetPluginPrivileges,
"/plugins/{name}/json": get_PluginInspect,
"/nodes": get_NodeList,
"/nodes/{id}": get_NodeInspect,
"/swarm": get_SwarmInspect,
"/swarm/unlockkey": get_SwarmUnlockkey,
"/services": get_ServiceList,
"/services/{id}": get_ServiceInspect,
"/services/{id}/logs": get_ServiceLogs,
"/tasks": get_TaskList,
"/tasks/{id}": get_TaskInspect,
"/tasks/{id}/logs": get_TaskLogs,
"/secrets": get_SecretList,
"/secrets/{id}": get_SecretInspect,
"/configs": get_ConfigList,
"/configs/{id}": get_ConfigInspect,
"/distribution/{name}/json": get_DistributionInspect
         },
post: {
           "/containers/create": post_ContainerCreate,
"/containers/{id}/resize": post_ContainerResize,
"/containers/{id}/start": post_ContainerStart,
"/containers/{id}/stop": post_ContainerStop,
"/containers/{id}/restart": post_ContainerRestart,
"/containers/{id}/kill": post_ContainerKill,
"/containers/{id}/update": post_ContainerUpdate,
"/containers/{id}/rename": post_ContainerRename,
"/containers/{id}/pause": post_ContainerPause,
"/containers/{id}/unpause": post_ContainerUnpause,
"/containers/{id}/attach": post_ContainerAttach,
"/containers/{id}/wait": post_ContainerWait,
"/containers/prune": post_ContainerPrune,
"/build": post_ImageBuild,
"/build/prune": post_BuildPrune,
"/images/create": post_ImageCreate,
"/images/{name}/push": post_ImagePush,
"/images/{name}/tag": post_ImageTag,
"/images/prune": post_ImagePrune,
"/auth": post_SystemAuth,
"/commit": post_ImageCommit,
"/images/load": post_ImageLoad,
"/containers/{id}/exec": post_ContainerExec,
"/exec/{id}/start": post_ExecStart,
"/exec/{id}/resize": post_ExecResize,
"/volumes/create": post_VolumeCreate,
"/volumes/prune": post_VolumePrune,
"/networks/create": post_NetworkCreate,
"/networks/{id}/connect": post_NetworkConnect,
"/networks/{id}/disconnect": post_NetworkDisconnect,
"/networks/prune": post_NetworkPrune,
"/plugins/pull": post_PluginPull,
"/plugins/{name}/enable": post_PluginEnable,
"/plugins/{name}/disable": post_PluginDisable,
"/plugins/{name}/upgrade": post_PluginUpgrade,
"/plugins/create": post_PluginCreate,
"/plugins/{name}/push": post_PluginPush,
"/plugins/{name}/set": post_PluginSet,
"/nodes/{id}/update": post_NodeUpdate,
"/swarm/init": post_SwarmInit,
"/swarm/join": post_SwarmJoin,
"/swarm/leave": post_SwarmLeave,
"/swarm/update": post_SwarmUpdate,
"/swarm/unlock": post_SwarmUnlock,
"/services/create": post_ServiceCreate,
"/services/{id}/update": post_ServiceUpdate,
"/secrets/create": post_SecretCreate,
"/secrets/{id}/update": post_SecretUpdate,
"/configs/create": post_ConfigCreate,
"/configs/{id}/update": post_ConfigUpdate,
"/session": post_Session
         },
delete: {
           "/containers/{id}": delete_ContainerDelete,
"/images/{name}": delete_ImageDelete,
"/volumes/{name}": delete_VolumeDelete,
"/networks/{id}": delete_NetworkDelete,
"/plugins/{name}": delete_PluginDelete,
"/nodes/{id}": delete_NodeDelete,
"/services/{id}": delete_ServiceDelete,
"/secrets/{id}": delete_SecretDelete,
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";
export type SecurityRequirements = readonly (readonly string[])[];


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

    // <EndpointSecurityRequirements>
    /** OpenAPI security requirements. Missing entries require no credentials. */
    export const endpointSecurityRequirements = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
    // </EndpointSecurityRequirements>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
      security?: SecurityRequirements;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string
      ? K extends `${infer TStatusCode extends number}`
        ? TStatusCode extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : never
      : K extends number
        ? K extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : never;
  }[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValue<T> = T extends v.GenericSchema ? v.InferOutput<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends v.GenericSchema ? v.InferInput<T> : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaInputRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never
        : K extends number
          ? K extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<UParams> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return v.parse(schema as v.GenericSchema, value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>



// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    return url
      .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (contentType.startsWith("text/")) {
      return (await response.text())
    }

    if (contentType.toLowerCase().startsWith("application/octet-stream")) {
      return new Blob([await response.arrayBuffer()])
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("get", path, ...params);
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("post", path, ...params);
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("delete", path, ...params);
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("put", path, ...params);
    }
    // </ApiClient.put>
    
// <ApiClient.head>
    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, _TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("head", path, ...params);
    }
    // </ApiClient.head>
    

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        security: endpointSecurityRequirements[method]?.[path] ?? [],
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (shouldValidateOutput && responseFormat !== "sse" && response.ok && endpointSchema?.responses) {
            const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Promise<any>
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}


/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>

  